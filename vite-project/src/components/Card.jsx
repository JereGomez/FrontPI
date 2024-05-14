import React from 'react'

const Card = ({item}) => {
 
   const {nombre,descripcion,rutasImagenes} = item
    

   const primeraimagenURL = rutasImagenes[0]

   
  return (
    

  <div class="col">
<div class ="card h100">
  <a href={"/detalles/"+ item.id}> <img src= {primeraimagenURL}  alt= {nombre} /></a>
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
