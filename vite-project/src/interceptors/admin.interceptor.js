import axios from 'axios';


const interceptor = axios.create({
  baseURL: 'http://localhost:8081/admin',
});

// editProduct
export const editProduct = async (productId, nombre, descripcion, rutasImagenes) => {
    try {
        const response = await interceptor.put(`/actualizar`, { id: productId, nombre, descripcion, rutasImagenes });
        return response.data;
    } catch (error) {
        console.error("Ocurrió un error al editar el producto:", error);
        throw error;
    }
};

// deleteProduct
export const deleteProduct = async (productId) => {
    try {
        await interceptor.delete(`/eliminar/${productId}`);
    } catch (error) {
        console.error("Ocurrió un error al eliminar el producto:", error);
        throw error;
    }
};


