import React from "react";
import UserInfo from "./UserInfo";
import AuthContext from "./auth-context";
export default function Main() {
  return (
    <AuthContext.Provider value={{ id: 25 }}>
      <div>
        <UserInfo />
      </div>
    </AuthContext.Provider>
  );
}
