import React from 'react'

const Card = ({ item }) => {
  const { nombre, descripcion, rutasImagenes } = item

  const primeraImagenURL = rutasImagenes[0];

  return (
    
    
      <div class="card-group">
      <div className="card">
       
        <div className="card-body">
        <a href= {"/detalles/" + item.id}>  <img src={primeraImagenURL} className="card-img-top" alt={nombre} /> </a> 
          <h2 className="card-title">{nombre}</h2>
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Card