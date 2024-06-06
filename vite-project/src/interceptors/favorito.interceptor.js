import axios from "axios";

const interceptor = axios.create({
    baseURL :'http://localhost:8081/favoritos',
    withCredentials:true,
})

export const getAllFavorits = async () => {
    try {
        const response = await interceptor.get('/listar');
        return response.data;
      } catch (error) {
        console.error('Ocurrió un error al traer los favoritos:', error);
        throw error;
      }
}


export const getFavoritsbyid = async (id) => {
    try {
        const response = await interceptor.get(`/${id}`)
        return response.data;
      } catch (error) {
        console.error('Ocurrió un error al traer los favoritos:', error);
        throw error;
      }
}


export const createFavorito = async (favorito) => {
    try {
      const response = await interceptor.post('/registrar', favorito, {
        withCredentials:true
      });
      return response.data;
    } catch (error) {
      console.error('Ocurrió un error al registrar un nuevo favorito:', error);
      throw error;
    }
  };



  export const deleteFavorito = async (favoritoid) => {
    try {
      await interceptor.delete(`/eliminar/${favoritoid}`, {
        withCredentials:true
      });
    } catch (error) {
      console.error('Ocurrió un error al eliminar el favorito:', error);
      throw error;
    }
  };
