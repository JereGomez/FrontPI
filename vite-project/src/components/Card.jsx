import React, { useEffect, useState } from 'react';
import { createFavorito, deleteFavorito, getAllFavorits } from '../interceptors/favorito.interceptor';
import { getUserFromCookie } from '../interceptors/auth.interceptor';

// Funciones auxiliares para datos aleatorios
const getRandomRating = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(1);
}

const getRandomReviewCount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Card = ({ item, Onfavoritetoggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesList = await getAllFavorits();
        const existingFavorite = favoritesList.find(fav => fav.id === item.id);
        setIsFavorite(!!existingFavorite);
      } catch (error) {
        console.error('Error al obtener la lista de favoritos', error);
      }
    };
    fetchFavorites();
  }, [item.id]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserFromCookie();
        setUser(userData); 
      } catch (error) {
        console.error('Error al obtener el usuario desde la cookie', error);
      }
    };
    fetchUser();
  }, []);

  const handleCreateFavorite = async () => {
    try {
      if (!user) {
        alert("Debes iniciar sesión para agregar a favoritos.");
        return;
      }

      if (isFavorite) {
        await deleteFavorito(item.id);
        alert("Tu producto se ha eliminado de favoritos");
      } else {
        const newFavorite = {
          nombre: item.nombre,
          productoId: item.id,
          usuarioId: user.id 
        };

        await createFavorito(newFavorite);
        alert("Tu producto se ha agregado a favoritos");
      }
      setIsFavorite(!isFavorite);
      Onfavoritetoggle(item.id);
    } catch (error) {
      console.error('Error al agregar o eliminar un favorito', error);
    }
  };

  const { nombre, precioNoche, imagenes = [], ubicacion = {} } = item;
  const primeraImagenURL = imagenes.length > 0 ? imagenes[0].rutaDeArchivo : 'default-image-url';
  const rating = getRandomRating(3.5, 5.0);
  const reviewCount = getRandomReviewCount(80, 200);

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
