import React, { useEffect, useState } from 'react';
import { createFavorito, deleteFavorito, getAllFavorits } from '../interceptors/favorito.interceptor';
import { getUserFromLocalStorage } from '../utils/userUtils'; 


// Estrellas num random
const getRandomRating = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(1);
}

// Reviews num random
const getRandomReviewCount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Card = ({ item, Onfavoritetoggle }) => {
  if (!item) {
    return null; 
  }

  const { id, nombre, precioNoche, imagenes = [], ubicacion = {} } = item;
  const primeraImagenURL = imagenes.length > 0 ? imagenes[0].rutaDeArchivo : 'default-image-url'; 
  const rating = getRandomRating(3.5, 5.0);
  const reviewCount = getRandomReviewCount(80, 200);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesList = await getAllFavorits();
        const existingFavorite = favoritesList.find(fav => fav.id === id);
        setIsFavorite(!!existingFavorite);
      } catch (error) {
        console.error('Error al obtener la lista de favoritos', error);
      }
    };
    fetchFavorites();
  }, [id]);

  const handleCreateFavorite = async () => {
    try {
      if (isFavorite) {
        await deleteFavorito(id);
        alert("Tu producto se ha eliminado de favoritos");
      } else {
        const user = getUserFromLocalStorage(); // Obtener usuario del localStorage
        if (!user) {
          console.error('No se encontró el usuario en localStorage');
          return;
        }
  
        //HAY QUE ARREGLAR
        const newFavorite = {
          nombre: item.nombre,
          productoId: item.id, 
          usuarioId: user.id 
        };
  
        await createFavorito(newFavorite);
        alert("Tu producto se ha agregado a favoritos");
      }
      setIsFavorite(!isFavorite);
      Onfavoritetoggle(id);
    } catch (error) {
      console.error('Error al agregar o eliminar un favorito', error);
    }
  };
  

  return (
    <div className="card border-0">
      <div className="image-container">
        <a href={`/detalles/${item.id}`}>
          <img src={primeraImagenURL} className="card-img-top rounded" alt={nombre}/>
        </a>
        <i 
          className={`favorite-icon botonfavoritos ${isFavorite ? "bi-heart-fill" : "bi-heart"}`} 
          onClick={handleCreateFavorite}
        ></i>
      </div>
      <div className="card-body">
        <h2 className="card-title fs-5 mt-2">{nombre}</h2>
        <div className="text-green">
          <i className="bi bi-geo-alt"></i> {ubicacion.pais || 'Desconocido'}
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