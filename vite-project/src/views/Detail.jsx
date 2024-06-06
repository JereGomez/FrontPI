import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomNavbar from '../components/NavBar';
import { getProductsById } from '../interceptors/product.interceptor';

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductsById(params.id);
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error(error);
        setError('Ocurrió un error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.id]);

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <> 
      <CustomNavbar />
      {!loading && !error && !product && (
        <div className="detail-container container py-3 py-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <p className='text-center fs-2 mt-4'>No hay producto</p>
              <a href="/" className='btn btn-custom-orange'>Volver</a>
            </div>
          </div>
        </div>
      )}

      {product && (
        <div className='detail-container container py-3 py-lg-5 ms-3'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <h2 className='d-flex d-lg-none mb-4 ms-1'>{product?.nombre}</h2>
              {product?.imagenes && product.imagenes.length > 0 && (
                <img src={product.imagenes[selectedImageIndex].rutaDeArchivo} alt="Main Image" className="large-image img-fluid rounded mb-2" onClick={() => openGallery(0)} />
              )}
            </div>
            <div className='col-lg-2'>
              <div className="d-flex flex-row flex-lg-column">
                {product?.imagenes && product.imagenes.slice(1, 5).map((imagen, index) => (
                  <img key={index} src={imagen.rutaDeArchivo} alt={`Image ${index}`} className="smaller-image img-fluid rounded mb-2" onClick={() => openGallery(index + 1)} />
                ))}
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='d-flex flex-column'>
                <h2 className='d-none d-lg-flex'>{product?.nombre}</h2>
                <p>{product?.descripcion}</p>
              {/* <p className="text-green"><i class="bi bi-geo-alt-fill"></i> {product?.ubicacion.ciudad}</p> */}
                <p className="text-green"><i class="bi bi-people-fill"></i> {product?.capacidad} personas</p>
                <p>${product?.precioNoche} <span className="text-green text-decoration-line-through">USD</span></p>
                <div>
                  <h5>Amenities</h5>
                  {product?.caracteristicas && product.caracteristicas.length > 0 ? (
                    <ul>
                      {product.caracteristicas.map((caracteristica) => (
                          <li key={caracteristica.id}>
                            {caracteristica.nombre} {caracteristica.icono ? caracteristica.icono : 'Icono no disponible'}
                          </li>                      
                      ))}
                    </ul>
                  ) : (
                    <p></p>
                  )}
                </div>
                <button className='btn btn-custom-orange w-75'>Reservar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup de la galería */}
      {showGallery && (
        <div className="gallery-popup">
          <button className="close-btn" onClick={closeGallery}>Cerrar</button>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {product?.imagenes && product.imagenes.map((imagen, index) => (
                <div key={index} className={`carousel-item ${index === selectedImageIndex ? 'active' : ''}`}>
                  <img src={imagen.rutaDeArchivo} className="d-block w-100" alt={`Image ${index}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
