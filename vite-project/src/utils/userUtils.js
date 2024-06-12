export const getUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };