import { compose, createStore, applyMiddleware } from "redux";
import rootReducers from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducers, composedEnhancer);

export default store;
