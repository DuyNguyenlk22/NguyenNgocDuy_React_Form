import { combineReducers } from "redux";
import { formReducer } from "./formReducer";

export let rootReducer = combineReducers({
  formReducer: formReducer,
});
