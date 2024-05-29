import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../views/HomePage";
import AdminPage from "../views/AdminPage";
import Detail from "../views/Detail";
import CreateAcount from "../views/CreateAcount";
import Login from "../views/Login";

const MainRouter = () => {
  const isUserLoggedIn = () => {
    return localStorage.getItem('user') !== null;
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={isUserLoggedIn() ? <AdminPage /> : <Navigate to="/login" />} />
      <Route path="/detalles/:id" element={<Detail />} />
      <Route path="/crearcuenta" element={isUserLoggedIn() ? <Navigate to="/" /> : <CreateAcount />} />
      <Route path="/login" element={isUserLoggedIn() ? <Navigate to="/" /> : <Login />} />
    </Routes>
  );
};

export default MainRouter;
