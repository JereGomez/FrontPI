import axios from 'axios';


const interceptor = axios.create({
  baseURL: 'http://localhost:8081/productos',
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






