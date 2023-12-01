import React from "react";
import { getFromLocalStorage } from "../../utils/local-storage";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const user = getFromLocalStorage("USER_FORM");
  const location = useLocation();

  //   if (lodaing) {
  //     return <Loading></Loading>;
  //   }

  if (!user) {
    return <Navigate to="/singup" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
