/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import PATHROUTES from "../../helpers/PathRoutes.helper";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.navBar}>
      <div className={styles.nav}>
        <Link to={PATHROUTES.HOME}>Home</Link>
        <Link to={PATHROUTES.ABOUT}>About</Link>
        <Link to={PATHROUTES.FAVORITES}>Favorites</Link>
        <Link to={PATHROUTES.RANDOM}>Random</Link> 
      </div>
      <div className={styles.search}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.cer}>
      <button>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default NavBar;