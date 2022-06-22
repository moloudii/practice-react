import React, { useState } from "react";
import Main from "./Main";
import AuthContext from "./auth-context";
export default function AppContext() {
  const [user, setUser] = useState({ id: 5 });
  return (
    <AuthContext.Provider value={user}>
      <Main />
    </AuthContext.Provider>
  );
}
