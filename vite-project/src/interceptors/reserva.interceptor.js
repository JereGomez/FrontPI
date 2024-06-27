import axios from "axios";
import { getUserFromCookie } from "./auth.interceptor";


const interceptor = axios.create({
  baseURL: "http://localhost:8081/reservas"
});

export const getAllReservas = async () => {
  try {
    const response = await interceptor.get("/listar", {
        withCredentials: true
    });
    return response; //le saco el .data
  } catch (error) {
    console.error("Ocurrió un error al obtener las reservas", error);
    throw error;
  }
};

export const getAllMyReservas = async () => {
  try {
    const response = await interceptor.get("/mis-reservas", {
        withCredentials: true
    });
    return response; 
  } catch (error) {
    console.error("Ocurrió un error al obtener tus reservas", error);
    throw error;
  }
};

export const createReserva = async (reserva) => {
  try {
    const response = await interceptor.post("/registrar", reserva, {
      withCredentials: true
    });

    return response;
  } catch (error) {
    console.error("Ocurrió un error al crear una reserva", error);
    throw error;
  }
};



