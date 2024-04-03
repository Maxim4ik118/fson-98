import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ProductList from "../components/ProductList/ProductList";
import SearchForm from "../components/SearchForm/SearchForm";

import { useProductSearch } from "../hooks/useProductSearch";

const SearchPage = () => {
  const { products, isLoading, isError, onSetSearchQuery } = useProductSearch({
    isSearchPage: true,
  });

  return (
    <div>
      <h1>Search product by brand or name</h1>
      <SearchForm onSetSearchQuery={onSetSearchQuery} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default SearchPage;
