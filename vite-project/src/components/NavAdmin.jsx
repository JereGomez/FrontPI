import React from 'react';
import LogoImage from '/Proyecto Integrador Equipo 8.png';
import BgNavBar from '/pexels-tomfisk-1518723.jpg';

function NavAdmin() {
  return (
    <div style={{ 
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

          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className='rounded-circle' src="https://dummyimage.com/40x40/000/fff" alt="perfil" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
      </nav>      
    </div>
  );
}

export default NavAdmin;
