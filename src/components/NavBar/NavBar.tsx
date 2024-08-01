import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      {/* TODO: Link to main page - important for product pages */}
      <h1>Home</h1>

      <h1>Cart</h1>
    </nav>
  );
};

export default NavBar;
