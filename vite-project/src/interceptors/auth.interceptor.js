import axios from "axios";

const interceptor = axios.create({
  baseURL: "http://localhost:8081/auth",
  withCredentials: true,
});

export const loginUser = async (user) => {
  try {
    const response = await interceptor.post("/login", user);
    console.log(user)
    return response.data;
  } catch (error) {
    console.error("Ocurrio un error al crear el usuario", error);
    throw error;
  }
};
