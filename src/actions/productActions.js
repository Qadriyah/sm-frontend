import axios from "axios";
import {
  setLoading, setErrors, setProducts, postProduct, postData, setProduct,
} from "./types";

export const getProducts = () => (dispatch) => {
  dispatch(setLoading());
  return axios
    .get("/products")
    .then((response) => {
      dispatch(setProducts(response.data));
    })
    .catch((error) => {
      dispatch(setErrors(error.response.data));
    });
};

export const addProduct = data => (dispatch) => {
  dispatch(postData());
  return axios
    .post("/products", data)
    .then(() => {
      dispatch(postProduct("Product added successfully"));
      dispatch(getProducts());
      dispatch(setErrors({}));
    })
    .catch((error) => {
      let message = "Some fields are missing";
      if (error.response.data.msg === "Product already exists") {
        message = error.response.data.msg;
      }
      dispatch(setErrors({ error: message }));
    });
};

export const deleteProduct = productId => dispatch => axios
  .delete(`/products/delete/${productId}`, productId)
  .then(() => {
    dispatch(getProducts());
  })
  .catch(() => {
    dispatch(setErrors({ error: "Failed to delete" }));
  });

export const editProduct = (productId, data) => (dispatch) => {
  dispatch(postData());
  return axios
    .put(`/products/edit/${Number(productId)}`, data)
    .then((response) => {
      dispatch(setProduct(response.data));
      dispatch(getProducts());
    })
    .catch((error) => {
      dispatch(setErrors(error.response.data));
    });
};

export const getSingleProduct = productId => dispatch => axios
  .get(`/products/${Number(productId)}`)
  .then((response) => {
    dispatch(setProduct(response.data));
  })
  .catch((error) => {
    dispatch(setErrors(error.response.data));
  });
