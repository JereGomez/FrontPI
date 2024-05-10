import axios from 'axios';


const interceptor = axios.create({
  baseURL: 'http://localhost:8081/admin',
});

//getAll
export const getAllProducts = async () => {
    try{
        const response = await interceptor.get("/listar")
        return response.data
    } catch {
        console.error("ocurrio un error inesperado al traer los productos")
    }
}

//createProduct
export const createProduct = async (nombre, descripcion, rutasImagenes) => {
    try {
        const response = await interceptor.post("/registrar", { nombre, descripcion, rutasImagenes });
        return response.data;
    } catch (error) {
        console.error("Ocurrió un error al registrar un nuevo producto:", error);
        throw error;
    }
};


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

//getById

export const getProductsById = async (id) => {
    try{
     const response = await interceptor.get(`${id}`)
     return response.data
     
    } 
    catch{
     console.log("ocurrio un error inesperado al traer el producto especifico");
    }
}


