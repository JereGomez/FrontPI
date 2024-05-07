
import { useState } from 'react';

  
const AdminTable = () => {

    
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
    setShowModal(false);
    };

  const handleShowModal = () => {
    setShowModal(true);
  };
    return (
      <div className='d-none d-lg-block'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoría</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ejemplo 1</td>
              <td>Categoría A</td>
              <td>$180.000</td>
              <td>
                <button type="button" className="btn btn-primary me-2">Editar</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ejemplo 2</td>
              <td>Categoría B</td>
              <td>$220.000</td>
              <td>
                <button type="button" className="btn btn-primary me-2">Editar</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ejemplo 3</td>
              <td>Categoría C</td>
              <td>$250.000</td>
              <td>
                <button type="button" className="btn btn-primary me-2">Editar</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Ejemplo 4</td>
              <td>Categoría D</td>
              <td>$105.000</td>
              <td>
                <button type="button" className="btn btn-primary me-2">Editar</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
        <button type="button" className="btn btn-primary" onClick={handleShowModal}>Agregar Nuevo Producto</button>
      </div>


  {/* Modal para agregar un nuevo producto */}
  {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Nuevo Producto</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    {/* Campos de entrada para los primeros 4 campos */}
                    <div className="mb-3">
                      <label htmlFor="productName" className="form-label">Nombre del Producto</label>
                      <input type="text" className="form-control" id="productName" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productDescription" className="form-label">Descripción del Producto</label>
                      <input type="text" className="form-control" id="productDescription" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productPrice" className="form-label">Precio del Producto</label>
                      <input type="text" className="form-control" id="productPrice" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productImage1" className="form-label">Imagen 1</label>
                      <input type="text" className="form-control" id="productImage1" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Campos de entrada para las imágenes restantes */}
                    <div className="mb-3">
                      <label htmlFor="productImage2" className="form-label">Imagen 2</label>
                      <input type="text" className="form-control" id="productImage2" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productImage3" className="form-label">Imagen 3</label>
                      <input type="text" className="form-control" id="productImage3" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productImage4" className="form-label">Imagen 4</label>
                      <input type="text" className="form-control" id="productImage4" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productImage5" className="form-label">Imagen 5</label>
                      <input type="text" className="form-control" id="productImage5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button type="button" className="btn btn-primary">Guardar Producto</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
    );
  };
  
  export default AdminTable;
  