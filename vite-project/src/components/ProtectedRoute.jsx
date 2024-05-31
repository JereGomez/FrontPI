import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { hasAdminPermission } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null); 

  useEffect(() => {
    const checkAdminPermission = async () => {
      const isAdmin = await hasAdminPermission();
      setIsAdmin(isAdmin); 
    };
    
    checkAdminPermission();
  }, []);

  if (isAdmin === null) {
    return <div>Cargando...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
