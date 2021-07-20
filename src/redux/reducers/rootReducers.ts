import { combineReducers } from "redux";
import themeReducer from "./themeReduces";
import voiceReducer from "./voiceReducer";

const rootReducers = combineReducers({
  theme: themeReducer,
  voice: voiceReducer,
});

export default rootReducers;
