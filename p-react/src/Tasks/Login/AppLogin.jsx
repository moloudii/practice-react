import React from "react";
import { AuthProvider } from "./Context";
import Login from "./pages/Login";
import { useAuthState } from "./Context";
import Dashboard from "./pages/Dashboard";

export default function AppLogin() {
  const { token } = useAuthState();
  return <>{token ? <Dashboard /> : <Login />}</>;
}
