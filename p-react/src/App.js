import "./App.css";
// import CustomHook from "./Tasks/Custom-hook/Custom-hook";
import ToastLoading from "./Tasks/toast-loading";
import UseLayoutEffectComponent from "./Tasks/useLayoutEffect";
import AppMap from "./Tasks/Map/AppMap";
import AppContext from "./Tasks/Context/AppContext";
import AppLogin from "./Tasks/Login/AppLogin";
// for Login Task
import { AuthProvider } from "./Tasks/Login/Context";
import AppAxios from "./Tasks/Axios-service/AppAxios";
import { Link, Route, Routes } from "react-router-dom";
import Post from "./Tasks/post";
import LogViewPage from "./components/logViewPage";
import { useAuth } from "./Tasks/Login-router/auth-user";
import PrivateRoute from "./Tasks/Login-router/private-route";
import LoginRouter from "./Tasks/Login-router/login-router";
import ToDos from "./Tasks/redux/todo";
import TodoApp from "./Tasks/Todo-list";

function App({ store }) {
  const auth = useAuth();
  return (
    <>
      <LogViewPage />
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/Toast">Toast</Link>
        </li>
        <li>
          <Link to="/app-context">App Context</Link>
        </li>
        <li>
          <Link to="/app-map">App Map</Link>
        </li>
        <li>
          <Link to="/posts/sample-post">Sample Post</Link>
        </li>
        <li>
          <Link to="/redux-test">Redux</Link>
        </li>
        <li>
          <Link to="/todo-list">Todo-List</Link>
        </li>
      </ul>
      <Routes>
        {/* Element attribute */}
        <Route
          exact
          path="/"
          element={
            <AuthProvider>
              <AppLogin />
            </AuthProvider>
          }
        />
        <Route path="/toast" element={<ToastLoading />} />
        <Route path="/app-map" element={<AppMap />} />
        <Route path="/redux-test" element={<ToDos />} />
        <Route path="/todo-list" element={<TodoApp />} />
        {/* <Route path="/posts/:slug" element={<Post />} /> */}
        {/* Private Route */}
        <Route path="/posts/:slug" element={<PrivateRoute />}>
          <Route path="/posts/:slug" element={<Post />} />
        </Route>
        <Route path="/login" element={<LoginRouter />} />

        {/* Component attribute */}
        <Route path="/app-context" Component={AppContext} />
      </Routes>
    </>
  );
}

export default App;

/* <CustomHook /> */
/* <UseLayoutEffectComponent /> */
/* <AppMap /> */
/* <AppContext /> */
/* <AppAxios /> */
