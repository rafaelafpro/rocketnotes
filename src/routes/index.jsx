/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";




export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user == undefined ? <AuthRoutes /> : <AppRoutes />}
    </BrowserRouter>
  );
}

