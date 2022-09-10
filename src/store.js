import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import EmpReducers from "./reducers/EmpReducers";

const reducer = combineReducers({
  EMPDETAILS: EmpReducers,
});

const intitialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intitialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
