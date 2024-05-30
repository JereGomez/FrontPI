import React, { useState } from "react";
import LogoImage from "/Proyecto Integrador Equipo 8.png";
import { registerUser } from "../interceptors/user.interceptor";
import ImagenLogin from "/Globos.png";

const CreateAcount = () => {
  const [usuario, setusuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasenia: "",
    rol: "ADMIN",
  });

  const [show, setshow] = useState(false);

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasenia: "",
  });
  

 
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (usuario.nombre.length < 5) {
      formIsValid = false;
      errors["nombre"] = "El nombre debe tener al menos 5 caracteres.";
    }

    if (usuario.apellido.length < 5) {
      formIsValid = false;
      errors["apellido"] = "El apellido debe tener al menos 5 caracteres.";
    }

    if (usuario.email === ""){
      formIsValid = false;
      errors["email"] = "El email no es válido.";
    }

    if (usuario.contrasenia.length < 8) {
      formIsValid = false;
      errors["contrasenia"] = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(errors);
    return formIsValid;
  };



  const HandleSubmit = async (event) => {
    event.preventDefault();

    if (
      validateForm()
    ) {
      try {
        await registerUser(usuario);
        setshow(true);
        setErrors({});
      } catch (error) {
        setErrors({form: "Ocurrió un error al crear el usuario." });
        console.log("Ocurrió un error al crear el usuario", error);
      }
    }
  };

  return (
    <div className="create-account-container">
      <div className="col-md-6 d-none d-md-block p-0">
        <img src={ImagenLogin} className="image-cuenta" alt="" />
      </div>

      <div className="col-md-6 form-side d-flex flex-column justify-content-center p-5">
        <div className="text-center mb-3">
          <h1 className="text-center text-custom-orange mb-3">
            <img
              src={LogoImage}
              alt="Gotravel"
              className="logo-gotravel mb-2"
            />
            GoTravel
          </h1>
          <h2 className="titlecuenta">Crea tu cuenta</h2>
          <p className="titlecuenta">
            Ya tienes una cuenta?
            <a href="/Login" className="link-login">
              Log in{" "}
            </a>
          </p>
        </div>

        <form onSubmit={HandleSubmit} className="form-container">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="text-inputs-form">
              Como es tu nombre?
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingresa tu nombre"
              onChange={(event) =>
                setusuario({ ...usuario, nombre: event.target.value })
              }
            />
             {errors.nombre && (
          <p className="text-danger ">{errors.nombre} </p>
        )}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="text-inputs-form">
              Como es tu apellido?
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingresa tu apellido"
              onChange={(event) =>
                setusuario({ ...usuario, apellido: event.target.value })
              }
            />
             {errors.apellido && (
          <p className="text-danger ">{errors.apellido} </p>
        )}
          </div>

          <div class="mb-2">
            <label for="exampleInputEmail1" class="text-inputs-form">
              {" "}
              Ingresa tu correo electronico
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Ingresa tu Correo"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) =>
                setusuario({ ...usuario, email: event.target.value })
              }
            />
             {errors.email && (
          <p className="text-danger ">{errors.email}</p>
        )}
          </div>
          <div class="mb-3">
            <label for="InputPassword2" class="text-inputs-form">
              Crea una contraseña
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Ingresa tu Contraseña"
              id="exampleInputPassword1"
              onChange={(event) =>
                setusuario({ ...usuario, contrasenia: event.target.value })
              }
            />
             {errors.contrasenia&& (
          <p className="text-danger ">{errors.contrasenia} </p>
        )}
          </div>
          <p className="titlecuenta">
            Al crear esta cuenta estas de acuerdo con los Terminos y Condiciones
          </p>
          <button type="submit" class="btn btn-crear-cuenta">
            Crear cuenta
          </button>
        </form>
        {show && (
          <h1 className="titlecuenta ">Te has registrado correctamente</h1>
        )}
        {errors.form && (
          <p className="text-danger ">{errors.form}</p>
        )}
      </div>
    </div>
  );
};

export default CreateAcount;
