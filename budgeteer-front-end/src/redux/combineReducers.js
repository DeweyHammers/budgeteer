import { combineReducers } from "redux";
import userReducers from "./user/userReducers";
import budgetReducers from "./budget/budgetReducers";
import transactionReducers from "./transaction/transactionReducers";

export default combineReducers({
  userReducers,
  budgetReducers,
  transactionReducers,
});
