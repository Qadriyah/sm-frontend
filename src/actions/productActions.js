import axios from "axios";
import { setLoading, setErrors, setProducts } from "./types";

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

export const addProduct = () => (dispatch) => {};
