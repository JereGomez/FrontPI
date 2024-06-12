import React from 'react';
import { deleteFavorito } from '../interceptors/favorito.interceptor';

const FavoriteItem = ({ item, Onfavoritetoggle }) => {
  const { id, nombre } = item;

  const handleDeleteFavorite = async () => {
    try {
      await deleteFavorito(id);
      Onfavoritetoggle(id);
      alert("Tu producto se ha eliminado de favoritos");
    } catch (error) {
      console.error('Error al eliminar favorito', error);
    }
  };

  return (
    <div className="card border rounded shadow-sm mb-4" style={{ maxWidth: '300px' }}>
      <div className="card-body">
        <h2 className="card-title fs-5 mt-2">{nombre}</h2>
        <button className="btn btn-custom-orange" onClick={handleDeleteFavorite}>Eliminar de favoritos</button>
      </div>
    </div>
  );
}

export default FavoriteItem;