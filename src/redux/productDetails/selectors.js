export const selectProductDetails = (state) =>
  state.productDetails.productDetails;
export const selectProductDetailsIsLoading = (state) =>
  state.productDetails.isLoading;
export const selectProductDetailsIsError = (state) =>
  state.productDetails.isError;
export const selectProductDetailsError = (state) => state.productDetails.error;
