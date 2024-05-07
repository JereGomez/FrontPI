import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import AdminPage from "../views/AdminPage";


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default MainRouter;
