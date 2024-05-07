import React from "react";
import "../App.css";
import Footer from "../utils/Footer";
import Card from "../utils/Card";

const HomePage = () => {
    return (
      <div className="p-5">
        <h1>Home Page</h1>
        <h2>Lema de la marca</h2>
        <button  className="btn btn-primary" >Crear Cuenta</button>
        <button className="btn btn-primary">Iniciar Sesion</button>
        <p>This is the home page.</p>
        <a href="/admin" className="btn btn-primary">ir a Admin</a>
        
        <Card/>
        
        </div>
        
        
    );
  };
  
export default HomePage;


