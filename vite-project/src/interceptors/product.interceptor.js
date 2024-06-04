import axios from 'axios';

const interceptor = axios.create({
  baseURL: 'http://localhost:8081/productos'
});

export const getAllProducts = async () => {
  try {
    const response = await interceptor.get('/');
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al traer los productos:', error);
    throw error;
  }
};

export const getProductsById = async (id) => {
  try {
    const response = await interceptor.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al traer el producto específico:', error);
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await interceptor.post('/admin/', product, {
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al registrar un nuevo producto:', error);
    throw error;
  }
};

export const editProduct = async (productId, productData) => {
  try {
    const response = await interceptor.put(`/admin/${productId}`, productData, {
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    console.error('Ocurrió un error al editar el producto:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await interceptor.delete(`/admin/${productId}`, {
      withCredentials:true
    });
  } catch (error) {
    console.error('Ocurrió un error al eliminar el producto:', error);
    throw error;
  }
};
