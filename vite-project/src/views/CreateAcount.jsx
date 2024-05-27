import React, { useState } from 'react'
import CustomNavbar from '../components/NavBar'
import { registeruser } from '../interceptors/user.interceptor'
import fondoimagen from 'Globos.png'

const CreateAcount = () => {
const [usuario,setusuario] = useState({
    nombre:"",
    apellido:"",
    email: "",
    contraseña:""
})

const [show,setshow] = useState(false)

const [error,seterror] = useState (false)

const HandleSubmit  = async (event) =>{

    event.preventDefault()

    if (usuario.nombre.length && usuario.contraseña.length < 2) {
      try
      {
        await registeruser(usuario);
        
        setshow(true)
        seterror(false)}

        
        catch(error){
          seterror(true);
         console.log('Ocurrio un error al crear el usuario',error);
              
        }
       
        
    }
    else{
        seterror(true)
    }
}





  return (
    
    <div className='card body'>
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
<img src={fondoimagen} class="img-fluid" alt=""/>
  
    </div>
  )
}

export default CreateAcount
