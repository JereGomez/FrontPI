import React, { useEffect, useState } from 'react';
import CustomNavbar from '../components/NavBar';
import { getAllFavorits } from '../interceptors/favorito.interceptor';
import FavoriteItem from '../components/FavoriteItem'; 

const Favs = () => {
  const [favorites, setFavorite] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getAllFavorits();
        console.log('Fetched data:', data); 
        setFavorite(Array.isArray(data) ? data : []); 
      } catch (error) {
        console.error('Se presentó un error al cargar los favoritos', error);
        setFavorite([]); 
      }
    };

    fetchFavorites();
  }, []);

  const handleFavoriteToggle = (id) => {
    setFavorite((prevFavorites) => prevFavorites.filter(fav => fav.id !== id));
  };

  return (
    <div>
      <CustomNavbar />
      <div className='favs-container container'>
        <h1 className='text-center mb-5'>Favoritos</h1>
        <div className='favs-grid row'>
          {Array.isArray(favorites) && favorites.length > 0 ? (
            favorites.map(item => (
              <div key={item.id} className="col-12 col-md-6 col-lg-3 mb-4">
                <FavoriteItem item={item} Onfavoritetoggle={handleFavoriteToggle} />
              </div>
            ))
          ) : (
            <div className='text-center'>
              <p className=''>No existen favoritos</p>
              <a href='/' className='btn btn-custom-orange'>Agregar un producto</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favs;