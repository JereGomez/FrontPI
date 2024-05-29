import React, { useState } from 'react';
import LogoImage from '/Proyecto Integrador Equipo 8.png';
import { registeruser } from '../interceptors/user.interceptor';
import ImagenLogin from '/Globos.png';

const CreateAccount = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    rol: "user" // Añadimos un rol por defecto
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validaciones simples en el frontend
    if (usuario.nombre && usuario.apellido && usuario.email && usuario.contraseña.length > 2) {
      try {
        await registeruser(usuario);
        setShow(true);
        setError(false);
      } catch (error) {
        setError(true);
        console.error('Ocurrió un error al crear el usuario', error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className='create-account-container'>
      <div className='col-md-6 d-none d-md-block p-0'>
        <img src={ImagenLogin} className='image-cuenta' alt="Imagen de inicio de sesión" />
      </div>

      <div className='col-md-6 form-side d-flex flex-column justify-content-center p-5'>
        <div className='text-center mb-3'>
          <h1 className='text-center text-custom-orange mb-3'>
            <img src={LogoImage} alt="Gotravel" className='logo-gotravel mb-2' />GoTravel
          </h1>
          <h2 className='titlecuenta'>Crea tu cuenta</h2>
          <p className='titlecuenta'>
            ¿Ya tienes una cuenta?
            <a href="/Login" className='link-login'>Log in</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className='form-container'>
          <div className="mb-3">
            <label htmlFor="nombre" className="text-inputs-form">¿Cómo es tu nombre?</label>
            <input
              type='text'
              className="form-control"
              placeholder='Ingresa tu nombre'
              onChange={(event) => setUsuario({ ...usuario, nombre: event.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="apellido" className="text-inputs-form">¿Cómo es tu apellido?</label>
            <input
              type='text'
              className="form-control"
              placeholder='Ingresa tu apellido'
              onChange={(event) => setUsuario({ ...usuario, apellido: event.target.value })}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="text-inputs-form">Ingresa tu correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder='Ingresa tu Correo'
              onChange={(event) => setUsuario({ ...usuario, email: event.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contraseña" className="text-inputs-form">Crea una contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder='Ingresa tu Contraseña'
              onChange={(event) => setUsuario({ ...usuario, contraseña: event.target.value })}
            />
          </div>

          <p className='titlecuenta'>
            Al crear esta cuenta estás de acuerdo con los Términos y Condiciones
          </p>
          <button type="submit" className="btn btn-crear-cuenta">Crear cuenta</button>
        </form>

        {show && <h1 className='titlecuenta'>Te has registrado correctamente</h1>}
        {error && <p className='titlecuenta'>Verifique su información nuevamente</p>}
      </div>
    </div>
  );
};

export default CreateAccount;
