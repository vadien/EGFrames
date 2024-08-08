import Carousel from "../../components/Carousel/Carousel";
import ProductGridLoader from "../../containers/ProductGridLoader/ProductGridLoader.tsx";
import angele from "../../assets/angele-kamp-white.jpg";
import dmitry from "../../assets/dmitry-mashkin-brass.jpg";
import kenny from "../../assets/kenny-eliason-white.jpg";
import styles from "./HomePage.module.scss";

const imageArr = [angele, dmitry, kenny];

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Carousel imageArr={imageArr} />
      <h1 className={styles.gridHeader}>Our Full Range</h1>
      <ProductGridLoader />
    </div>
  );
};

export default HomePage;
