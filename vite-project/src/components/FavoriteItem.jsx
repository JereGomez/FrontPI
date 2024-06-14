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

  const primeraImagenURL = item.productoSalidaDto.imagenes.length > 0 ? item.productoSalidaDto.imagenes[0].rutaDeArchivo : 'default-image-url';


  return (
    <>
      <div className="image-container" style={{maxWidth:'240px'}}>
        <a href={`/detalles/${item.id}`}>
          <img src={primeraImagenURL} className="card-img-top rounded" alt={nombre}/>
        </a>
      </div>
      <div className="card-body">
        <h2 className="card-title fs-5 mt-2">{item.productoSalidaDto.nombre}</h2>
        <div className="text-green">
          <i className="bi bi-geo-alt"></i> {item.productoSalidaDto.ubicacion.pais || 'Desconocido'}
        </div>
        <div>
          <span className="fw-semibold fs-5">${item.productoSalidaDto.precioNoche}</span>
          <span className="text-green text-decoration-line-through">USD</span>
        </div>
        <div className="text-green">{item.productoSalidaDto.caracteristicas[0].nombre}</div>
        <button className="btn btn-custom-orange mt-2" onClick={handleDeleteFavorite}>Eliminar</button>
      </div>
    </>
  );
}

export default FavoriteItem;