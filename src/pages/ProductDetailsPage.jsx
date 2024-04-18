import { Suspense, lazy, useEffect, useRef } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
const CommentsPage = lazy(() => import("./CommentsPage"));

import { useDispatch, useSelector } from "react-redux";
import {
  selectProductDetails,
  selectProductDetailsError,
  selectProductDetailsIsError,
  selectProductDetailsIsLoading,
} from "../redux/productDetails/selectors";
import { apiRequestProductDetailsById } from "../redux/productDetails/productDetailsOps";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  const productDetails = useSelector(selectProductDetails);
  const isLoading = useSelector(selectProductDetailsIsLoading);
  const isError = useSelector(selectProductDetailsIsError);
  const error = useSelector(selectProductDetailsError);

  useEffect(() => {
    dispatch(apiRequestProductDetailsById(productId));
  }, [dispatch, productId]);

  return (
    <div>
      <h1>Product details: {productId}</h1>
      <Link to={backLinkRef.current}>⬅ Go Back</Link>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={error} />}
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<CommentsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;
