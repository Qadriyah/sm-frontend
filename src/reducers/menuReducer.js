import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions/types";

const initialSate = {
  isOpen: true,
};

const menuReducer = (state = initialSate, action) => {
  switch (action.type) {
  case OPEN_DRAWER:
    return {
      ...state,
      isOpen: action.payload,
    };
  case CLOSE_DRAWER:
    return {
      ...state,
      isOpen: action.payload,
    };
  default:
    return state;
  }
};

export default menuReducer;
