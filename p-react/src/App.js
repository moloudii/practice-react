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

function App() {
  return (
    <>
      {/* <ToastLoading /> */}
      {/* <CustomHook /> */}
      {/* <UseLayoutEffectComponent /> */}
      {/* <AppMap /> */}
      {/* <AppContext /> */}
      <AuthProvider>
        <AppLogin />
      </AuthProvider>
      {/* <AppAxios /> */}
    </>
  );
}

export default App;
