import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";
import voiceReducer from "./voiceReducer";

const rootReducers = combineReducers({
  theme: themeReducer,
  voice: voiceReducer,
  content: contentReducer,
  lang: langReducer,
});

export default rootReducers;
