import { LOADING, GET_CATEGORIES } from "../actions/types";

const initialState = {
  loading: false,
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case GET_CATEGORIES:
    return {
      ...state,
      categories: action.payload,
      loading: false,
    };
  default:
    return {
      ...state,
      loading: false,
    };
  }
};

export default categoryReducer;
