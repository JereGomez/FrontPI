import React from 'react'

const Card = ({item}) => {
 
   const {nombre,descripcion,rutasimagenes} = item

    
  return (
<div class = "card" >
      <h2 class="card-title">{nombre}</h2>
      <h2 class = "card-text">{descripcion} </h2>
        <a href={"/detalles/"+ item.id}><img src={rutasimagenes}  class = "card-image-top"alt="imagen" /></a>
    </div>

    
  )
}

export default Card
