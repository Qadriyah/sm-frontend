import axios from "axios";
import {
  setLoading, setErrors, setProducts, postProduct, postData,
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
    .then((response) => {
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
