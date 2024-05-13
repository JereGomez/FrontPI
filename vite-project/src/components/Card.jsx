import React from 'react'

const Card = ({item}) => {
 
   const {nombre,descripcion,rutasimagenes} = item

   
  return (
    

  <div class="col">
<div class ="card h100">
  <a href={"/detalles/"+ item.id}><img src={rutasimagenes}  class = "card-image-top"alt="..." /></a>
<div class="card-body">
      <h2 class="card-title">{nombre}</h2>
      <p class = "card-text">{descripcion} 
      </p>
      </div>

      </div>
    
    </div>
   
  
  
  )
}
export default Card
