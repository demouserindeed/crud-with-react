import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import WithAuthHoc from '../WithAuthHoc/WithAuthHoc';
import useHelperHook from '../../CustomHooks/useHelperHook';

const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useHelperHook();
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    logout();
    navigate('/crud-with-react');
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/crud-with-react/main">ADD RECORD</Link>
        </li>
        <li>
          <Link to="/crud-with-react/main/records">RECORD LIST</Link>
        </li>
        <li>
          <Link to="#" onClick={handleLogout}>
            LOG OUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default WithAuthHoc(NavBar);
