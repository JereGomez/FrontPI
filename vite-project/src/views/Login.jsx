import React, { useState } from 'react'
import ImagenLogin from '/Globos.png'
import ImagenGoogle from '/png-transparent-logo-google-g-google-s-logo-icon.png'

const Login = () => {

  const [registro,setregistro] = useState({

    email: "",
    contraseña:""
})

const [show,setshow] = useState(false)

const [error,seterror] = useState (false)

  const HandleSubmit = (event)=>{
    event.preventDefault() 
    if(registro.contraseña.length >= 8){
     setshow(true)
     seterror(false)
    }
    else{
      seterror(true)
    }
  }
  return (
   
      
      <div className='login-background' style={{
        backgroundImage: `url(${ImagenLogin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '119vh',
        width: '100vw',
        margint:'0',
        padding: '0'
      }}>

    
    <div className='login-container'>
    
    
   <div className='row-h-100 justify-content-end align-items-center'>
  <div className='col-md-4 bg-white p-4 shadow rounded login-form-container' >
  

     <h2 className='titlecuenta mb-4 text-center'>Ingresa tu cuenta</h2>

     <form onSubmit={HandleSubmit} >
     
  <div class="mb-3" >
 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Correo electronico'/>
    
  </div>
  <div class="mb-3">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='contraseña' onChange={(event)=>setregistro({...registro,contraseña:event.target.value})}/>
  </div>
  
  <button type="submit" class="btn btn-iniciar-sesion ">Continuar</button>
 
 <button type="button" className="btn btn-google">

                <img src= {ImagenGoogle} alt="" className="me-2" style={{ width: '20px' }} />
                Ingresa con Google
              </button>
  <div className="text-center my-3">
              <span>O</span>
              </div>
  <a href="/crearcuenta" class = "btn btn-iniciar-sesion-dark" >Crear cuenta</a>
  <div className="text-center titlecuenta">
                <p>Obtiene full acceso a todos nuestros productos</p>
              </div>
   
  
</form>
{show && <a href="/" className='link-login'>Te has logueado correctamente</a> }
{error && <p className='text-danger error-login'>Verifique su Contraseña nuevamente</p>}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login
