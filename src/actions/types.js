export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const ERRORS = "ERRORS";
export const LOADING = "LOADING";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const POST_DATA = "POST_DATA";

export const setLoading = () => ({
  type: LOADING,
});

export const setErrors = errors => ({
  type: ERRORS,
  payload: errors,
});

export const setCurrentUser = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const setCategories = data => ({
  type: GET_CATEGORIES,
  payload: data,
});

export const setProducts = data => ({
  type: GET_PRODUCTS,
  payload: data,
});

export const postProduct = data => ({
  type: ADD_PRODUCT,
  payload: data,
});

export const postData = () => ({
  type: POST_DATA,
});
