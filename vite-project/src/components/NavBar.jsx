import React from 'react';
import LogoImage from '/Proyecto Integrador Equipo 8.png';
import BgNavBar from '/pexels-tomfisk-1518723.jpg';

function CustomNavbar() {
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
              <li className="nav-item">
                <a className="nav-link text-white" href="/Login">Iniciar sesión</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white btn btn-custom-orange borded rounded" href="/crearcuenta">Crear cuenta</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p className='lead-navbar text-center text-light d-none d-md-flex'>Encuentra instantáneamente las mejores ofertas en hoteles, glampings, hostales y mucho más!</p>
      {/* Contenedor para el formulario de filtros */}
      <div className="container mt-3 mb-2">
        <form className="d-none d-sm-flex justify-content-center">
          <select className="form-select me-2 text-green p-2" style={{ maxWidth: '250px' }}>
            <option value="" disabled selected> Á donde vamos</option>
            <option value="paris">París</option>
            <option value="newyork">Nueva York</option>
            <option value="tokyo">Tokio</option>
            <option value="london">Londres</option>
          </select>
          <select className="form-select me-2 text-green p-2" style={{ maxWidth: '250px' }}>
            <option value="" disabled selected>Check-in - Check-out</option>
            <option value="2024-06-01">1 Junio 2024</option>
            <option value="2024-06-02">2 Junio 2024</option>
            <option value="2024-06-03">3 Junio 2024</option>
            <option value="2024-06-04">4 Junio 2024</option>
          </select>
          <select className="form-select me-2 text-green p-2" style={{ maxWidth: '250px' }}>
            <option value="" disabled selected>2 huéspedes - 1 habitación</option>
            <option value="2024-06-05">2 huéspedes - 2 habitación</option>
            <option value="2024-06-06">3 huéspedes - 3 habitación</option>
            <option value="2024-06-07">4 huéspedes - 4 habitación</option>
            <option value="2024-06-08">5 huéspedes - 5 habitación</option>
          </select>
          <button type="submit" className="btn btn-custom-orange">Buscar &rarr;</button>
        </form>
      </div>
    </div>
  );
}

export default CustomNavbar;
