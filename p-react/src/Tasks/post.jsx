import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Login-router/auth-user";
export default function Post() {
  const params = useParams();
  console.log(params);
  const negative = useNavigate();
  const match = useLocation();
  console.log(match);
  const { isAuthenticated, logOut } = useAuth();
  return (
    <>
      <button onClick={() => negative(-1)}>back</button>
      <div>post {params.slug}</div>
      {isAuthenticated ? (
        <button onClick={() => logOut()}>LogOut</button>
      ) : null}
    </>
  );
}
