import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <NavLink to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>Sobre nós</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar