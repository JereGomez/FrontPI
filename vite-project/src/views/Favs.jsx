import React, { useEffect, useState } from 'react'
import CustomNavbar from '../components/NavBar'
import { getAllFavorits } from '../interceptors/favorito.interceptor';
import Card from '../components/Card';

const Favs = () => {

  const [favorites, setfavorite] = useState([]);
useEffect(()=>{

  const fetchFavorit = async () =>{
  try {
  const data = await getAllFavorits()
 setfavorite(data)
  } catch (error) {
   console.error ("Se presento un error al cargar los favoritos", error)
  }
  }

    fetchFavorit()
},[])




  return (
    <div>
      <CustomNavbar/>
      <div className='favs-container'>
        <h1>Favoritos</h1>
      <div className='favs-grid'>
      {favorites.lenght > 0 ? (favorites.map(item=><Card key={item.id}item={item}></Card>)):(
        <p>No existen favoritos aun</p>
      )
      
      }

      </div>

      </div>
    </div>
  )
}

export default Favs
