import React from 'react';

const Footer = () => {
  return (
    <div className="bg-dark mt-5">
      <footer className="container py-5">
        <div className="row">
          <div className="col-4 col-md-4 mb-3">
            <h5 className='text-custom-orange'>GOTravel</h5>
            <p className='text-custom-orange text-'>Nuestro trabajo es inspirar y permitir hospedajes memorables para todos.</p>
          </div>  

          <div className="col-4 col-md-2 mb-3">
            <h5 className='text-custom-orange'>Acerca de</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-custom-orange-lead">sobre nosotros</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-custom-orange-lead">Blog</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-custom-orange-lead">Carreras</a></li>
            </ul>
          </div>

          <div className="col-4 col-md-2 mb-3">
            <h5 className='text-custom-orange'>Soporte</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-custom-orange-lead">Contactanos</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-custom-orange-lead">FAQ</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 ms-md-4 mb-3">
            <form>
              <h5 className="text-custom-orange">Recibir actualizaciones</h5>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Ingresa tu correo</label>
                <input id="newsletter1" type="text" className="form-control bg-secondary border-0" placeholder="Ingresa tu correo" />
                <button className="btn btn-custom-orange" type="button">Subscribirse</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between">
      <p className='text-white'>&copy; 2024 GOTravel. Todos los derechos reservados</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3 "><a class="text-white" href="#">Politica de privacidad</a></li>
        <li class="ms-3"><a class="text-white" href="#">Términos y condiciones</a></li>
      </ul>
    </div>
      </footer>
    </div>
  );
}

export default Footer;
