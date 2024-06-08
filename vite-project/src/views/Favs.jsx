import React, { useEffect, useState } from 'react'
import CustomNavbar from '../components/NavBar'
import { getAllFavorits } from '../interceptors/favorito.interceptor';
import Card from '../components/Card';

const Favs = () => {

  const [favorites, setfavorite] = useState([]);
  
useEffect(()=>{

  const fetchFavorites = async () =>{
  try {
  const data = await getAllFavorits()
 setfavorite(data)
 
  } catch (error) {
   console.error ("Se presento un error al cargar los favoritos", error)
  }
  }

    fetchFavorites()
},[])

const handleFavoriteToggle = (id) => {
  setfavorite((prevFavorites) => prevFavorites.filter(fav => fav.id !== id));
};


  return (
    <div>
      <CustomNavbar/>
      <div className='favs-container'>
        <h1>Favoritos</h1>
      <div className='favs-grid'>
      {favorites.length > 0 ? (favorites.map(item =>   <div key={item.id} className="row-12 row-md-6 row-lg-3 mb-4 flex-direction-row-0">
                  <Card item={item}  Onfavoritetoggle = {handleFavoriteToggle} />
                </div>)):(
        <p>No existen favoritos aun</p>
      )
      
      }

      </div>

      </div>
    </div>
  )
}

export default Favs
