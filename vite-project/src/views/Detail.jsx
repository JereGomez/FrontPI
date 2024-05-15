import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




const Detail = () => {
 
 const [product,setproduct] = useState({})
 const params = useParams()

 const [showallImages,setShowallImages] = useState(false)

 useEffect(()=>{
  axios('http://localhost:8081/admin/'+params.id)
  .then(res =>setproduct(res.data))
 },[])


 const toggleAllimages = () => {
  setShowallImages(!showallImages)
}


  return (
    
     
          
          
            <div className='container py-5'>
              <div className='row'>
                <div className='col-lg-6'>
              <h1 className="card-title">{product.nombre}</h1>
              <p className="card-text">{product.descripcion}</p>
              <a href="/" className='" text-white btn btn-custom-orange borded rounded'>Volver</a>

              <div className="d-flex flex-wrap ">
            {product.rutasImagenes && product.rutasImagenes.slice(0,showallImages ? product.rutasImagenes.length :2).map((imageUrl, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <img src={imageUrl} alt={`Image ${index}`} className="img-thumbnail"/>
              </div>
            ))}
          </div>
          {product.rutasImagenes && product.rutasImagenes.length > 2 &&  (
            <div className="text-center mt-3">
              <button className='"nav-link text-white btn btn-custom-orange borded rounded"'onClick={toggleAllimages}>{setShowallImages ? "Ver mas" : "Ver menos"}</button>
            </div>
          )}
        
      
      </div>
      </div>
      </div>
   
   
  )
}

export default Detail
