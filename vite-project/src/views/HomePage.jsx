import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";
import axios from "axios";

const HomePage = () => {

 const [list,setlist] = useState([])


useEffect(() =>{
  axios('http://localhost:8081/productos/listar')
  .then(res => setlist(res.data) )
},[])


    return (
      <div>
      
       
        
       {list.map((producto) =><Card key={producto.id} item={producto} />)}
        
        </div>
        
      
    );
  };
  
export default HomePage;


