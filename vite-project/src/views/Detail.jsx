import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomNavbar from '../components/NavBar';
import { getProductsById } from '../interceptors/admin.interceptor';

const Detail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const [showAllImages, setShowAllImages] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductsById(params.id);
        setProduct(productData);
      } catch (error) {
        console.error("Error al obtener el producto en Detail:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const toggleAllImages = () => {
    setShowAllImages(!showAllImages);
  };

  return (
    <>
      <CustomNavbar />
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <a href="/" className='" text-white btn btn-custom-orange borded rounded mb-3'>&#8592; Volver</a>
            <h1 className="card-title">{product.nombre}</h1>
            <p className="card-text">{product.descripcion}</p>
            <div className="d-flex flex-wrap ">
              {product.rutasImagenes && product.rutasImagenes.slice(0, showAllImages ? product.rutasImagenes.length : 2).map((imageUrl, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <img src={imageUrl} alt={`Image ${index}`} className="img-thumbnail"/>
                </div>
              ))}
            </div>
            {product.rutasImagenes && product.rutasImagenes.length > 2 &&  (
              <div className="text-center mt-3">
                <button className='"nav-link text-white btn btn-custom-orange borded rounded"' onClick={toggleAllImages}>
                  {showAllImages ? "Ver menos" : "Ver más"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
