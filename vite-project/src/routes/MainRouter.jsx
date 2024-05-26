import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import AdminPage from "../views/AdminPage";
import Detail from "../views/Detail";
import CreateAcount from "../views/CreateAcount";
import Login from "../views/Login";



const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/detalles/:id" element={<Detail />} />
      <Route path="/crearcuenta" element={<CreateAcount/>} />
      <Route path="/Login" element={<Login/>} />
      
      
     
    </Routes>
    
    
  );
};

export default MainRouter;
