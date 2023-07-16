import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Tasks/Login-router/auth-user";
// import { createStore, combineReducers } from "redux";
// import { Provider } from "./store-provider";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const initState = [
//   {
//     id: 1,
//     text: "Task 1",
//     completed: false,
//   },
//   {
//     id: 2,
//     text: "Task 2",
//     completed: false,
//   },
//   {
//     id: 3,
//     text: "Task 3",
//     completed: true,
//   },
// ];
// const todos = (state = initState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false,
//         },
//       ];
//     case "TOGGLE_TODO":
//       return state.map((todo) => {
//         if (todo.id !== action.id) {
//           return todo;
//         }
//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       });
//     default:
//       return state;
//   }
// };
// const visibilityFilter = (state = "SHOW_ALL", action) => {
//   switch (action.type) {
//     case "SET_VISIBILITY_FILTER":
//       return action.filter;
//     default:
//       return state;
//   }
// };
// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](state[key], action);
//       return nextState;
//     }, {});
//   };
// };
// const reducers = {
//   todos,
//   visibilityFilter,
// };
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   };
// };
// const store = createStore(combineReducers(reducers));
console.log(store);
root.render(
  <BrowserRouter>
    {/* LOGIN WITH ROUTER */}
    <AuthProvider>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
