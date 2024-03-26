import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

import { requestProducts, requestProductsByQuery } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ProductList from "./components/ProductList/ProductList";
import SearchForm from "./components/SearchForm/SearchForm";

const AppWithHTTPRequests = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await requestProducts();
        setProducts(data.products);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchProductsByQuery() {
      try {
        setIsLoading(true);
        const data = await requestProductsByQuery(query);
        setProducts(data.products);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductsByQuery();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <SearchForm onSetSearchQuery={onSetSearchQuery} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default AppWithHTTPRequests;
