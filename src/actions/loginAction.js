import axios from "axios";
import jwt_decode from "jwt-decode";
import { LOADING, LOGIN_SUCCESS, ERRORS } from "./types";
import setAuthToken from "../utils/setAuthToken";

const host = process.env.HOST;

export const loginUser = data => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  return axios
    .post(`${host}/login`, data)
    .then((response) => {
      const { token } = response.data;
      const userData = jwt_decode(token);
      localStorage.setItem("token", token);
      setAuthToken(token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userData.user_claims,
      });
    })
    .catch((error) => {
      dispatch({
        type: ERRORS,
        payload: error.response.data,
      });
    });
};

export const logout = () => {};
