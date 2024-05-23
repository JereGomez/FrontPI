import React from 'react'
import CustomNavbar from '../components/NavBar'

const Login = () => {
  return (
    <div>
      <CustomNavbar/>
      <div>
    
     <h1 className='titlecuenta'>Iniciar Sesión</h1>
     <form>
  
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="card-title">Correo Electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="card-title">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-custom-orange">Iniciar Sesion</button>
</form>
    </div>
    </div>
  )
}

export default Login
