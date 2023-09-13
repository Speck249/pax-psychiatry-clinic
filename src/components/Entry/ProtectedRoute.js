import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from '../../context/userAuthContext';

/* Manages user access to dashboard upon successful authentication */
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);

  if (!user) {
    return <Navigate to="/" />;
  }
  
  return children;
};

export default ProtectedRoute;