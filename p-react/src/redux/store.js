import { createStore } from "redux";
import rootReducers from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const composedEnhancer = composeWithDevTools();

const store = createStore(rootReducers, composedEnhancer);

export default store;
