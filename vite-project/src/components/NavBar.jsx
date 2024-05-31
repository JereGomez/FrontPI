import React, { useState } from 'react';
import LogoImage from '/Proyecto Integrador Equipo 8.png';
import BgNavBar from '/pexels-tomfisk-1518723.jpg';
import { logoutUser } from '../interceptors/auth.interceptor';

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);

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

  return (
    <div className='pb-3' style={{ 
      backgroundImage: `url(${BgNavBar})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Contenedor para el logo y el texto */}
          <div className="d-flex align-items-center">
            <a className="navbar-brand text-white fw-semibold d-flex align-items-center" href="/">
              <img src={LogoImage} alt="Logo" style={{ width: '80px'}} /> 
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
      <p className='lead-navbar text-center text-light d-none d-md-flex'>Encuentra instantáneamente las mejores ofertas en hoteles, glampings, hostales y mucho más!</p>
      {/* Contenedor para el formulario de filtros */}
      <div className="container mt-3 mb-2">
        <form className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
          <select className="form-select mb-2 mb-sm-0 me-0 me-sm-2 text-green p-2" style={{ maxWidth: '250px' }}>
            <option value="" disabled selected>Á donde vamos</option>
            <option value="paris">París</option>
            <option value="newyork">Nueva York</option>
            <option value="tokyo">Tokio</option>
            <option value="london">Londres</option>
          </select>
          <input
            type="date"
            className="form-control mb-2 mb-sm-0 me-0 me-sm-2 text-green p-2"
            style={{ maxWidth: '250px' }}
            placeholder="Check-in"
          />
          <input
            type="date"
            className="form-control mb-2 mb-sm-0 me-0 me-sm-2 text-green p-2 w-100"
            style={{ maxWidth: '250px' }}
            placeholder="Check-out"
          />
          <button type="submit" className="boton-filtros-nav btn btn-custom-orange p-md-2">Buscar &rarr;</button>
        </form>
      </div>
    </div>
  );
}

export default CustomNavbar;
