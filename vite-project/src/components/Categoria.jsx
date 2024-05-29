import React, { useState } from 'react';
import { createCategoria } from '../interceptors/categoria.interceptor';

const Categoria = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCategoria = { nombre, descripcion };
      await createCategoria(newCategoria);
      alert('Categoría creada con éxito');
      setNombre('');
      setDescripcion('');
    } catch (error) {
      console.error('Ocurrió un error al registrar una nueva categoría:', error);
      alert('Error al crear la categoría. Intenta nuevamente.');
    }
  };

  return (
    <div className="modal fade" id="categoriaModal" tabIndex="-1" aria-labelledby="categoriaModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="categoriaModalLabel">Crear Categoría</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  value={descripcion}
                  onChange={handleDescripcionChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom-green">Crear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoria;
