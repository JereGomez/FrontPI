import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import AdminPage from "../views/AdminPage";
import Detail from "../views/Detail";



const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/detalles/:id" element={<Detail />} />
     
    </Routes>
    
    
  );
};

export default MainRouter;
