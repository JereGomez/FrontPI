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
    <div>
      <h1>{product.nombre}</h1>
      <h2>{product.descripcion} </h2>
      
      <a href="/">Volver</a>
    </div>
  )
}

export default Detail
