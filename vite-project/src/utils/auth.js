export const hasAdminPermission = async () => {
    try {
      const response = await fetch('http://localhost:8081/usuarios/admin/home', {
        method: 'GET',
        credentials: 'include'
      });
  
      if (!response.ok) {
        console.error('Error al hacer la solicitud:', response.statusText);
        return false;
      }
  
      const isAdmin = await response.json();
    
      return isAdmin;
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      return false;
    }
  };
  