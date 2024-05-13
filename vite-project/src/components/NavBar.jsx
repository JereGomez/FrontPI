import React from 'react';
import LogoImage from '/Proyecto Integrador Equipo 8.png';

function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Contenedor para el logo y el texto */}
        <div className="d-flex align-items-center">
          {/* Aquí utilizamos la etiqueta img para mostrar el logo */}
          <a className="navbar-brand text-white fw-semibold d-flex align-items-center" href="/">
            <img src={LogoImage} alt="Logo" style={{ width: '80px'}} /> {/* Asegúrate de agregar un atributo alt para accesibilidad */}
            <span className="nav-link text-custom-orange" style={{marginLeft:'-20px'}}>GOTravel</span> {/* Texto "GOTravel" */}
          </a>
        </div>

        <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Iniciar sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Crear cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
