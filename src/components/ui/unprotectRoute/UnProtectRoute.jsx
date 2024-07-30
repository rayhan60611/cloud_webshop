import { AuthContext } from "@/providers/AuthProviders";
import React, { Children, useContext } from "react";
import { Navigate } from "react-router-dom";

const UnProtectRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={location.state?.from || "/"} />;
  }

  return children;
};

export default UnProtectRoute;
