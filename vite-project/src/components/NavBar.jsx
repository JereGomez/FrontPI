import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import LogoImage from '/Proyecto Integrador Equipo 8.png';
import BgNavBar from '/pexels-tomfisk-1518723.jpg';
import { logoutUser } from '../interceptors/auth.interceptor';
import DateRangePicker from './DateRangePicker'; 
import { getAllProducts } from '../interceptors/product.interceptor';

function CustomNavbar({ setFoundProducts }) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const currentLocation = useLocation(); 

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const products = await getAllProducts();
        const uniqueLocations = [...new Set(products.map(product => product.ubicacion && product.ubicacion.pais))];
        setLocations(uniqueLocations);
      } catch (error) {
        console.error('Error al obtener ubicaciones:', error);
      }
    };
    fetchLocations();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser(); 
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error al hacer logout:', error);
    } finally {
      window.location.reload();
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const products = await getAllProducts();
      const filteredProducts = products.filter(product => product.ubicacion && product.ubicacion.pais === location);
      setSearchResults(filteredProducts);
      setFoundProducts(filteredProducts);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  return (
    <div className='pb-3' style={{
      backgroundImage: `url(${BgNavBar})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand text-white fw-semibold d-flex align-items-center" href="/">
              <img src={LogoImage} alt="Logo" style={{ width: '80px',}} /> 
              <span id='nav-title' className="nav-link text-custom-orange">GOTravel</span> 
            </a>
          </div>
          <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Hoteles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Glampings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Hostales</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link btn btn-custom-orange rounded me-2" onClick={handleLogout}>Cerrar sesión</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/Login">Iniciar sesión</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white btn btn-custom-orange borded rounded" href="/crearcuenta">Crear cuenta</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {!currentLocation.pathname.includes('/detalles/') && ( 
        <div className="container mt-3 mb-2">
          <form className="d-flex flex-column flex-sm-row justify-content-center align-items-center" onSubmit={handleSearch}>
            <select className="form-select mb-2 mb-sm-0 me-0 me-sm-2 text-green p-2" style={{ maxWidth: '250px' }} value={location} onChange={handleLocationChange}>
              <option value="" disabled selected>Á donde vamos</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
            <DateRangePicker setStartDate={setStartDate} setEndDate={setEndDate} /> 
            <button type="submit" className="boton-filtros-nav btn btn-custom-orange p-md-2 ms-2 mt-2 mt-md-0">Buscar &rarr;</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CustomNavbar;
