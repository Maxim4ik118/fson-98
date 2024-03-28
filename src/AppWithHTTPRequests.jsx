import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ProductList from "./components/ProductList/ProductList";
import SearchForm from "./components/SearchForm/SearchForm";

import { useProductSearch } from "./hooks/useProductSearch";
import RefExample from "./components/RefExample/RefExample";

const AppWithHTTPRequests = () => {
  const { products, isLoading, isError, onSetSearchQuery } = useProductSearch();

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <RefExample />
      <SearchForm onSetSearchQuery={onSetSearchQuery} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default AppWithHTTPRequests;
