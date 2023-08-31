import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      {isAuthenticated ? (
        <Component />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace={true} />
      )}
    </Route>
  );
};

export default PrivateRoute;