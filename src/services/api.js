import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const requestProducts = async () => {
  const { data } = await instance.get("/products");

  return data;
};

export const requestProductsByQuery = async (query = "") => {
  const { data } = await instance.get(`/products/search?q=${query}`);

  return data;
};

export const requestProductDetailsById = async (productId) => {
  const { data } = await instance.get(`/products/${productId}`);

  return data;
};