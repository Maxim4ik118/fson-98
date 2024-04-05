import { useEffect, useState } from "react";
import { requestProducts, requestProductsByQuery } from "../services/api";
import { useSearchParams } from "react-router-dom";

export const useProductSearch = ({ isSearchPage = false }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    // ?query=samsung
    const query = searchParams.get("query") // samsung
  
    useEffect(() => {
      if(isSearchPage) return;
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
    }, [isSearchPage]);
  
    useEffect(() => {
      if (!query) return;
  
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
      // setQuery(searchTerm);
      setSearchParams({ query: searchTerm });
    };


  return { products, isLoading, isError, onSetSearchQuery };
}

