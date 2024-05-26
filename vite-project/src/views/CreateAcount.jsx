import React, { useState } from 'react'
import CustomNavbar from '../components/NavBar'

const CreateAcount = () => {
const [usuario,setusuario] = useState({
    nombre:"",
    apellido:"",
    email: "",
    contraseña:""
})

const [show,setshow] = useState(false)

const [error,seterror] = useState (false)

const HandleSubmit  = (event) =>{

    event.preventDefault()

    if (usuario.nombre.length && usuario.contraseña.length > 8) {
        setshow(true)
        seterror(false)
        
    }
    else{
        seterror(true)
    }
}



  return (
    <div>
     <CustomNavbar/>
     <h1 className='titlecuenta'>Crea tu cuenta</h1>
     <form onSubmit={HandleSubmit}>
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="card-title">Nombre</label>
    <input type='text' class="form-control" onChange={(event)=>setusuario({...usuario,nombre:event.target.value})}/>
    
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="card-title">Apellido</label>
    <input type='text' class="form-control" onChange={(event)=>setusuario({...usuario,apellido:event.target.value})}/>
  </div>

  <div class="mb-3" >
    <label for="exampleInputEmail1" class="card-title">Correo Electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="card-title" >Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event)=>setusuario({...usuario,contraseña:event.target.value})}/>
  </div>
  
  <button type="submit"  class="btn btn-custom-orange">Registrarse</button>
</form>
{show && <h1 className='titlecuenta'>Te has registrado correctamente</h1> }
{error && <p className='titlecuenta'>Verifique su informacion nuevamente</p>}
  
  
    </div>
  )
}

export default CreateAcount
