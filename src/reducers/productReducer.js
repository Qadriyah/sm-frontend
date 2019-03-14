import {
  LOADING, GET_PRODUCTS, ADD_PRODUCT, POST_DATA,
} from "../actions/types";

const initialState = {
  loading: false,
  loader: false,
  message: "",
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case POST_DATA:
    return {
      ...state,
      loader: true,
    };
  case GET_PRODUCTS:
    return {
      ...state,
      products: action.payload,
      loading: false,
    };
  case ADD_PRODUCT:
    return {
      ...state,
      message: action.payload,
      loader: false,
    };
  default:
    return {
      ...state,
      loading: false,
      loader: false,
    };
  }
};

export default productReducer;
