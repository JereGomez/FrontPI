import React from 'react';

//estrellas num random
const getRandomRating = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(1);
}

//reviews num random
const getRandomReviewCount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Card = ({ item }) => {
  const { nombre, precioNoche, imagenes } = item;
  const primeraImagenURL = imagenes.length > 0 ? imagenes[0].rutaDeArchivo : 'default-image-url'; // URL por defecto si no hay imágenes

  const rating = getRandomRating(3.5, 5.0);
  const reviewCount = getRandomReviewCount(80, 200);

  return (
    <div className="card border-0">
      <a><button class="bi bi-heart-fill"></button></a>
      <div className="card-body">
      
        <a href={`/detalles/${item.id}`}>
        
          <img src={primeraImagenURL} className="card-img-top rounded" alt={nombre} />
        </a>
        <h2 className="card-title fs-5 mt-2">{nombre}</h2>
        <div className="text-green">
          <i className="bi bi-geo-alt"></i> Madrid
        </div>
        <div className="text-green">
          <i className="bi bi-star"></i> {rating} ({reviewCount} reseñas)
        </div>
        <div>
          <span className="fw-semibold fs-5">${precioNoche}</span>
          <span className="text-green text-decoration-line-through">USD</span>
        </div>
        <div className="text-green">
          Desayuno incluido
        </div>
      </div>
    </div>
  );
}

export default Card;
