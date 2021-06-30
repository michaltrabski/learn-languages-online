import { combineReducers } from "redux";
import themeReducer from "./themeReduces";

const rootReducers = combineReducers({ theme: themeReducer });

export default rootReducers;
