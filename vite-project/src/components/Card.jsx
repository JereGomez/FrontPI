import React from 'react'

const Card = ({ item }) => {
  const { nombre, descripcion, rutasImagenes } = item

  const primeraImagenURL = rutasImagenes[0];

  return (
    <div className="col">
      <div className="card h100">
        <img src={primeraImagenURL} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default Card