import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/product-services";
import ProductPage from "../../pages/ProductPage/ProductPage";

const ProductPageLoader = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("loading");

  useEffect(() => {
    // console.log(`loading product ${id}`);
    getProductById(id)
      .then((data) => {
        setFetchStatus("success");
        // console.log("successful fetch");
        setProduct(data);
      })
      .catch((error) => {
        setFetchStatus("failed");
        setError(error);
      });
  }, [id]);

  // console.log(product);
  return (
    <>
      {fetchStatus === "loading" && <p>Loading...</p>}
      {fetchStatus === "failed" && <p>{error.message}</p>}
      {fetchStatus === "success" && product && (
        <ProductPage product={product} />
        // <h1>Product page displayed here</h1>
      )}
    </>
  );
};

export default ProductPageLoader;
