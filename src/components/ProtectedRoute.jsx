// defined the protected route, which is used in App.jsx to protect the "Account" page and redirect it if not logged in
import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()

  if (!user) {
    return <Navigate to='/' />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
