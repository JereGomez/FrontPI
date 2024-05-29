import axios from 'axios';

const interceptor = axios.create({
  baseURL: 'http://localhost:8081/caracteristica',
});

export const getAllCaracteristicas = async () => {
  try {
    const response = await interceptor.get('/');
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al traer los productos:', error);
    throw error;
  }
};

export const getCaracteristicaById = async (id) => {
  try {
    const response = await interceptor.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al traer el producto específico:', error);
    throw error;
  }
};

export const createCaracteristica = async (caracteristica) => {
  try {
    const response = await interceptor.post('/', caracteristica);
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al registrar una nueva caracteristica:', error);
    throw error;
  }
};

export const editCaracteristica = async (caracteristicaId, caracteristicaData) => {
  try {
    const response = await interceptor.put(`/${caracteristicaId}`, caracteristicaData);
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al editar la caracteristica:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteCaracteristica = async (caracteristicaId) => {
  try {
    await interceptor.delete(`/${caracteristicaId}`);
  } catch (error) {
    console.error('Ocurrió un error al eliminar la caracteristica:', error);
    throw error;
  }
};
