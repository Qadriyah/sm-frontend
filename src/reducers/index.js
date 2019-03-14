import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import errorReducer from "./errorReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: loginReducer,
  errors: errorReducer,
  categories: categoryReducer,
  products: productReducer,
});
