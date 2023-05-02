import { useLayoutEffect } from "react";
import { useAuth } from "./auth-user";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  console.log("========>", from);
  const { signInWithEmailAndPassword, isAuthenticated, isPending } = useAuth();
  useLayoutEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      console.log("double OOOOOK");
      navigate(from);
      // history(from.pathname);
    }
  }, [isAuthenticated, from, navigate]);
  return (
    <>
      {isPending ? (
        <p>Loading ...</p>
      ) : (
        <button onClick={() => signInWithEmailAndPassword("moloudi", 123)}>
          login
        </button>
      )}
    </>
  );
}
