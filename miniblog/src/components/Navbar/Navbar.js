import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <NavLink to="/" className={styles.navbarLogo}>
        Mini <span>BLOG</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/"} className={({isActive}) => (isActive ? styles.active : styles.navbarLinks)}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({isActive}) => (isActive ? styles.active : styles.navbarLinks)}>Sobre nós</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={({isActive}) => (isActive ? styles.active : styles.navbarLinks)}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/register"} className={({isActive}) => (isActive ? styles.active : styles.navbarLinks)}>Cadastrar</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar