import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Tasks/Login-router/auth-user";
import { createStore } from "redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
const initState = [
  {
    id: 1,
    text: "Task 1",
    completed: false,
  },
  {
    id: 2,
    text: "Task 2",
    completed: false,
  },
  {
    id: 3,
    text: "Task 3",
    completed: false,
  },
];
const todos = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};
const store = createStore(todos);
console.log(store);
root.render(
  <BrowserRouter>
    {/* LOGIN WITH ROUTER */}
    <AuthProvider>
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
