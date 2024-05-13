import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Detail = () => {

 const [product,setproduct] = useState({})
 const params = useParams()

 useEffect(()=>{
  axios('http://localhost:8081/admin/'+params.id)
  .then(res =>setproduct(res.data))
 },[])

  return (
    <div class="col">
    <div class ="card">
    <div class="card-body">
      <img src={product.rutasimagenes} alt="" /> 
      <h1 class="card-title">{product.nombre}</h1>
      <p class="card-text">{product.descripcion} </p>
      
      
      <a href="/">Volver</a>
    </div>
    </div>
    </div>
  )
}

export default Detail
