import axios from "axios";
import { setLoading, setCategories, setErrors } from "./types";

export const getCategories = () => (dispatch) => {
  dispatch(setLoading());
  return axios
    .get("/products/category")
    .then((response) => {
      dispatch(setCategories(response.data));
    })
    .catch((error) => {
      dispatch(setErrors(error.response.data));
    });
};
