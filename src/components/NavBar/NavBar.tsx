import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useContext } from 'react';
import { AuthenticationContext } from '../AuthContext/AuthContext';
import WithAuthHoc from '../WithAuthHoc/WithAuthHoc';

const NavBar = () => {
  const navigate = useNavigate();
  const authdata = useContext(AuthenticationContext);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    authdata?.setIsAuthenticated(false);
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
