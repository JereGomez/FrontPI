import React, { useState } from 'react';
import { createCaracteristica } from '../interceptors/caracteristica.interceptor';

const Caracteristica = () => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState(1); // Por defecto, el tipo es 1, pero puedes cambiarlo según tus necesidades

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipo(parseInt(e.target.value)); // Aseguramos que el tipo sea un número entero
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCaracteristica = { nombre, tipo }; // Creamos el objeto de característica con nombre y tipo
      await createCaracteristica(newCaracteristica);
      alert('Característica creada con éxito');
      setNombre('');
      setTipo(1); // Reiniciamos el tipo al valor por defecto
    } catch (error) {
      console.error('Ocurrió un error al registrar una nueva característica:', error);
      alert('Error al crear la característica. Intenta nuevamente.');
    }
  };

  return (
    <div className="modal fade" id="caracteristicaModal" tabIndex="-1" aria-labelledby="caracteristicaModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="caracteristicaModalLabel">Crear Característica</h5>
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
                <label htmlFor="tipo" className="form-label">Tipo</label>
                <select
                  className="form-select"
                  id="tipo"
                  value={tipo}
                  onChange={handleTipoChange}
                  required
                >
                  <option value="1">Tipo 1</option> {/* Aquí puedes agregar más opciones de tipo según tus necesidades */}
                </select>
              </div>
              <button type="submit" className="btn btn-custom-green">Crear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caracteristica;
