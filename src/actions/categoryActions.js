import axios from "axios";
import { LOADING, GET_CATEGORIES, ERRORS } from "./types";

const host = process.env.HOST;

export const getCategories = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  return axios
    .get(`${host}/products/category`)
    .then((response) => {
      dispatch({
        type: GET_CATEGORIES,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ERRORS,
        payload: error.response.data,
      });
    });
};

export const addCategory = () => (dispatch) => {};
