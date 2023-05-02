import Post from "../post";
import { useAuth } from "./auth-user";
import { useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ path, element }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  //   return (
  //     <Route
  //       path={path}
  //       element={isAuthenticated ? element : <Navigate replace to="/login" />}
  //     />
  //   );
  // return isAuthenticated ? (
  //   <Outlet />
  // ) : (
  //   <Navigate
  //     to={{
  //       pathname: "/login",
  //       // state: {
  //       //   from: location,
  //       // },
  //     }}
  //     replace
  //   />
  // );
  return (
    <>
      {isAuthenticated ? (
        <Post />
      ) : (
        <Navigate to={"/login"} state={{ from: location }} />
      )}
    </>
  );
}
