import React from "react";
import "../App.css";
import AdminTable from "../components/AdminTable";

const AdminPage = () => {
    return (
      <div className="container mt-3 ">
        <h1>Panel de administrador</h1>
        <p>Maneja tus productos desde esta pantalla.</p>
        <h1 className="text-center d-flex d-lg-none">Panel bloqueado para celular o tablet</h1>
        <AdminTable />
      </div>
    );
};

export default AdminPage;
