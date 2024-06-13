import axios from "axios";

const interceptor = axios.create({
  baseURL: "http://localhost:8081/auth"
});

//login
export const loginUser = async (user) => {
  try {
    const response = await interceptor.post("/login", user, {
      withCredentials: true
    });
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  } catch (error) {
    console.error("Ocurrió un error al iniciar sesión", error);
    throw error;
  }
};

//logout
export const logoutUser = async () => {
  try {
    const response = await interceptor.get("/logout",
      {withCredentials : true
        
      }
    );
    
    localStorage.removeItem("user");
    return response;
  } catch (error) {
    console.error("Ocurrio un error al cerrar sesión", error);
    throw error;
  }
}
