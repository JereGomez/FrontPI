
const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid mx-5">
    <a class="navbar-brand" href="/">Home Page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="#">Crear Cuenta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Iniciar Sesion</a>
        </li>
       
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2 bg-primary" type="search" placeholder="Lema de la marca" aria-label="Search" />
        <button class="btn btn-primary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
        
    );
  };
  
export default NavBar;


