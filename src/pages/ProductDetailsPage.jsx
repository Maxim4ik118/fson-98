import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { requestProductDetailsById } from "../services/api";
import CommentPage from "./CommentPage";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await requestProductDetailsById(productId);

        setProductDetails(data);
      } catch (error) {
        console.log("error: ", error);
      }
    }

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product details: {productId}</h1>
      {productDetails !== null && (
        <div>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <h2>Title: {productDetails.title}</h2>
          <p>Brand: {productDetails.brand}</p>
          <p>Price: {productDetails.price}</p>
        </div>
      )}
      {/* /products/6 -> /products/6/comments */}
      <Link to="comments">Comment</Link>
      <Routes>
        <Route path="comments" element={<CommentPage />} />
      </Routes>
    </div>
  );
};

export default ProductDetailsPage;
