import { useLocation, Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { Basket } from "@phosphor-icons/react";

const NavBar = () => {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <nav className={styles.NavBar}>
          <Link to="/products" className={styles.logoLink}>
            <h1 className={styles.Frames}>
              <span className={styles.EG}>EG</span> FRAMES
            </h1>
          </Link>

          {/* TODO: Cart page */}
          <button className={styles.cartBtn}>
            <Basket size={32} />
          </button>
        </nav>
      )}
    </>
  );
};

export default NavBar;
