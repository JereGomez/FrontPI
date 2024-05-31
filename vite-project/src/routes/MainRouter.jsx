import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import AdminPage from '../views/AdminPage';
import Detail from '../views/Detail';
import CreateAcount from '../views/CreateAcount';
import Login from '../views/Login';
import ProtectedRoute from '../components/ProtectedRoute';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/detalles/:id" element={<Detail />} />
      <Route path="/crearcuenta" element={<CreateAcount />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRouter;