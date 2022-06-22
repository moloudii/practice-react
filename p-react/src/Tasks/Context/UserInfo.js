import React, { useContext } from "react";
import AuthContext from "./auth-context";
export default function UserInfo() {
  const user = useContext(AuthContext);
  return <p>user ID: {user.id}</p>;
}
