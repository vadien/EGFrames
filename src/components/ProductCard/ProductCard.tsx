import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className={styles.ProductCard} onClick={onClick}>
      <div className={styles.thumbContainer}>
        <img src={product.imageThumb} className={styles.cardImage} />
      </div>
      <div className={styles.infoContainer}>
        {"$" + product.price}
        <br />
        {product.name}
      </div>
    </div>
  );
};

export default ProductCard;
