import { createStore, combineReducers } from "redux";
import storeSynchronize from "redux-localstore";
import { gama } from "reducer/state"

const combineReducer = combineReducers({
  gama,
});

export const store = createStore(combineReducer);

storeSynchronize(store);
