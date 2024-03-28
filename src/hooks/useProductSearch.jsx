import { useEffect, useState } from "react";
import { requestProducts, requestProductsByQuery } from "../services/api";

export const useProductSearch = () => {
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


  return { products, isLoading, isError, onSetSearchQuery };
}

