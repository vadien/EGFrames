import styles from "./ProductPage.module.scss";

const ProductPage = ({ product }) => {
  return (
    <div className={styles.ProductPage}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={product.imageURL} className={styles.productImage} />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.productHeader}>
            <h1>{product.name}</h1>
          </div>
          <div className={styles.productInfo}>
            {product.inStock && <h1>{"$" + product.price + ".00"}</h1>}
            {!product.inStock && <h1 style={{ color: "red" }}>OUT OF STOCK</h1>}
            {product.description} <br />
            Available in:
            <ul>
              {product.colours.map((colour) => (
                <li key={colour}>{colour}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
