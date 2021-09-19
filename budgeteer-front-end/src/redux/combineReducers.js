import { combineReducers } from "redux";
import userReducers from "./user/userReducers";
import budgetReducers from "./budget/budgetReducers";
import transactionsReducer from "./transaction/transcationReducer";

export default combineReducers({
  userReducers,
  budgetReducers,
  transactionsReducer,
});
