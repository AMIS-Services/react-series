import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { accommodationsReducer } from "./store/accommodations/reducer";

const reducers = combineReducers({ accommodations: accommodationsReducer });

export const configureStore = () => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

  return createStoreWithMiddleware(reducers);
};
