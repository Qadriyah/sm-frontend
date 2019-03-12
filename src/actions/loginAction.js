import axios from "axios";
import jwt_decode from "jwt-decode";
import { setLoading, setCurrentUser, setErrors } from "./types";
import setAuthToken from "../utils/setAuthToken";

const host = process.env.HOST;

export const loginUser = data => (dispatch) => {
  dispatch(setLoading());
  return axios
    .post(`${host}/login`, data)
    .then((response) => {
      const { token } = response.data;
      const userData = jwt_decode(token);
      localStorage.setItem("token", token);
      setAuthToken(token);
      dispatch(setCurrentUser(userData.user_claims));
    })
    .catch((error) => {
      dispatch(setErrors(error.response.data));
    });
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  window.location.href = "/";
};
