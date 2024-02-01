import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
    const isAuthToken = window.sessionStorage.getItem("token");

  return isAuthToken ? <Outlet/> : <Navigate to="/log"/>;
};

export default ProtectedRoutes