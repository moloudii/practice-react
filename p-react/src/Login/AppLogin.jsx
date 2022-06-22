import React from "react";
import { AuthProvider } from "./Context/auth-context";
import Login from "./pages/Login";

export default function AppLogin() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
