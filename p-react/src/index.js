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
import { fetchTodos } from "./Tasks/Todo-list/todos/todosSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(fetchTodos);
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
