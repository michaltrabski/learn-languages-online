import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers/rootReducers";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootStoreType = ReturnType<typeof rootReducers>;

export default store;
