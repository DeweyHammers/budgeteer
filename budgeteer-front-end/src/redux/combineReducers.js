import { combineReducers } from "redux";
import userReducers from "./user/userReducers";
import budgetReducers from "./budget/budgetReducers";

export default combineReducers({
  userReducers,
  budgetReducers,
});
