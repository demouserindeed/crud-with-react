import { useEffect, useState, useContext } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../components/AuthContext/AuthContext';
import { AuthenticationContextType } from '../../types/types';

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
  const authData = useContext<AuthenticationContextType | undefined>(
    AuthenticationContext,
  );

  const handleLogin = () => {
    localStorage.setItem('email', `${cred.email}`);
    localStorage.setItem('password', `${cred.password}`);
    authData?.setIsAuthenticated(true);
    navigate('/crud-with-react/main');
  };

  useEffect(() => {
    if (localStorage.getItem('email') !== null) {
      navigate('/crud-with-react/main');
    }
  }, []);

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
