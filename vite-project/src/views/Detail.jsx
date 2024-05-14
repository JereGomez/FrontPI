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
    
    <div class ="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">

    {product.rutasImagenes && product.rutasImagenes.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} className='"w-100 shadow-1-strong rounded mb-4"' />
          ))}
    <h1 class="card-title">{product.nombre}</h1>
      <p class="card-text">{product.descripcion} </p>
      <a href="/" className='"nav-link text-white btn btn-custom-orange borded rounded"'>Volver</a>

    
      
      
      
    </div>
    </div>
    
  )
}

export default Detail
