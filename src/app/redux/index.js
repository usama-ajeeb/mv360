import { combineReducers } from "redux";
import data from "./reducers";

const RootReducer = combineReducers({
  vendor: data,
});

export default RootReducer;
