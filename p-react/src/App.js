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

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="Toast">Toast</Link>
        </li>
      </ul>
      <Routes>
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
