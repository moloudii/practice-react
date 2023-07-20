import { compose, createStore } from "redux";
import rootReducers from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logActions, logState } from "../addons/enhancers";

// const composedEnhancer = composeWithDevTools();

// const store = createStore(rootReducers, composedEnhancer);
const preloadedState = {
  todoReducer: {
    entities: {
      1: { id: 1, text: "design ui", completed: true, color: "red " },
      2: { id: 2, text: "discover state", completed: false },
      3: { id: 3, text: "discover actions", completed: false },
      4: { id: 4, text: "implement reducer", completed: false, color: "blue" },
      5: { id: 5, text: "completed patterns", completed: false, color: "red" },
    },
  },
};

const enhancers = compose(logActions, logState);
const store = createStore(rootReducers, preloadedState, enhancers);

export default store;
