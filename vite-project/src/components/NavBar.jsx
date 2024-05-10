import React from 'react';

function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom-orange">
      <div className="container">

        <a className="navbar-brand text-white fw-semibold" href="/">GOTravel</a>

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
