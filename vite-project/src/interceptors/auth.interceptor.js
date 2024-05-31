import axios from "axios";

const interceptor = axios.create({
  baseURL: "http://localhost:8081/auth",
  withCredentials: true,
});

export const loginUser = async (user) => {
  try {
    const response = await interceptor.post("/login", user);
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  } catch (error) {
    console.error("Ocurrió un error al iniciar sesión", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await interceptor.get("logout");
    localStorage.removeItem("user");
    return response;
  } catch (error) {
    console.error("Ocurrio un error al cerrar sesión", error);
    throw error;
  }
}
