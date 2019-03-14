import { LOADING, GET_PRODUCTS } from "../actions/types";

const initialState = {
  loading: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case GET_PRODUCTS:
    return {
      ...state,
      products: action.payload,
      loading: false,
    };
  default:
    return {
      ...state,
      loading: false,
    };
  }
};

export default productReducer;
