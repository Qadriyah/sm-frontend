import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import errorReducer from "./errorReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  auth: loginReducer,
  errors: errorReducer,
  categories: categoryReducer,
});
