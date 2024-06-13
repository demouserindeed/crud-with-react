import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import useHelperHook from '../../CustomHooks/useHelperHook';

type Cred = {
  email: string;
  password: string;
};

const Login = () => {
  const [cred, setCred] = useState<Cred>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { login, loginStatus } = useHelperHook();

  const handleLogin = () => {
    localStorage.setItem('email', `${cred.email}`);
    localStorage.setItem('password', `${cred.password}`);
    login();
    navigate('/crud-with-react/main');
  };

  useEffect(() => {
    if (loginStatus) {
      navigate('/crud-with-react/main');
    }
  }, [loginStatus]);

  return (
    <div className={styles.login}>
      <div className={styles.login_background}></div>

      <form>
        <h1>Please Login</h1>
        Email
        <input
          name="email"
          onChange={(e) =>
            setCred((cred) => ({ ...cred, [e.target.name]: e.target.value }))
          }
          value={cred.email}
        />
        Password
        <input
          name="password"
          type="password"
          onChange={(e) =>
            setCred((cred) => ({ ...cred, [e.target.name]: e.target.value }))
          }
          value={cred.password}
        />
        <button type="button" onClick={handleLogin}>
          Authenticate
        </button>
      </form>
    </div>
  );
};

export default Login;
