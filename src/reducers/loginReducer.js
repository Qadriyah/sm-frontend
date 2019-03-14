import { LOGIN_SUCCESS, LOADING } from "../actions/types";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: action.payload,
    };
  default:
    return {
      ...state,
      loading: false,
    };
  }
};

export default loginReducer;
