
const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-custom-orange" >
        <div class="container-fluid mx-5">
            <a class="navbar-brand text-white" href="/">Digital Booking</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
                <a class="nav-link text-white" href="/">Inicio</a>
                <a class="nav-link text-white" href="/admin">Administrador</a>
            </div>
            </div>
        </div>
        </nav>
        
    );
  };
  
export default NavBar;


