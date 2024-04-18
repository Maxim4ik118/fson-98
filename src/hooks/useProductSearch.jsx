import { useEffect, useState } from "react";
import { requestProductsByQuery } from "../services/api";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiGetProducts } from "../redux/productDetails/productDetailsOps";

export const useProductSearch = ({ isSearchPage = false }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productDetails.products);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // ?query=samsung
  const query = searchParams.get("query"); // samsung

  useEffect(() => {
    if (isSearchPage) return;

    dispatch(apiGetProducts());
  }, [isSearchPage, dispatch]);

  useEffect(() => {
    if (!query) return;

    async function fetchProductsByQuery() {
      try {
        setIsLoading(true);
        const data = await requestProductsByQuery(query);
        // setProducts(data.products);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductsByQuery();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    // setQuery(searchTerm);
    setSearchParams({ query: searchTerm });
  };

  return { products, isLoading, isError, onSetSearchQuery };
};
