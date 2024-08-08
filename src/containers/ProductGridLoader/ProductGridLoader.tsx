import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-services";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import styles from "./ProductGridLoader.module.scss";

const ProductGridLoader = () => {
  const [fetchStatus, setFetchStatus] = useState("Loading");
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setFetchStatus("Success");
        setProductData(data);
      })
      .catch((error) => {
        setFetchStatus("Failed");
        setError(error);
      });
  }, []);

  const clickProductCard = (product: any) => {
    navigate(product.id);
  };

  return (
    <div className={styles.ProductGridLoader}>
      {fetchStatus === "Loading" && <h1>Loading...</h1>}
      {fetchStatus === "Failed" && <h1>Error: {error}</h1>}
      {fetchStatus === "Success" &&
        productData.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => clickProductCard(product)}
          />
        ))}
    </div>
  );
};

export default ProductGridLoader;
