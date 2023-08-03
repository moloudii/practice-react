import { compose, createStore, applyMiddleware } from "redux";
import rootReducers from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// const fetchTodosMiddleware = (storeApi) => (next) => (action) => {
//   if (action.type === "todos/fetchTodos") {
//     client.get("todoReducer").then((todos) => {
//       storeApi.dispatch({ type: "todos/todosLoaded", payload: todos });
//     });
//   }
//   next(action);
// };

const asyncFunctionMiddleware = (storeApi) => (next) => (action) => {
  if (typeof action === "function") {
    return action(storeApi.dispatch, storeApi.getState);
  }
  return next(action);
};
const composedEnhancer = composeWithDevTools(
  applyMiddleware(asyncFunctionMiddleware)
);

const store = createStore(rootReducers, composedEnhancer);

export default store;
