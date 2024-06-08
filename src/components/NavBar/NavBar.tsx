import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/crud-with-react">ADD RECORD</Link>
        </li>
        <li>
          <Link to="/crud-with-react/records">RECORD LIST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
