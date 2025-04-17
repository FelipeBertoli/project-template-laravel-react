import instance from "../axios";

export const getCsrfToken = async () => {
    await instance.get('/sanctum/csrf-cookie');
};

// const getCookie = (name) => {
//     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     if (match) return decodeURIComponent(match[2]);
//     return null;
// };

export const login = async ({ email, password }) => {
    try {
        await instance.get("/sanctum/csrf-cookie");



        const { data } = await instance.post('/login', { email, password });

        if (data.token) {
            localStorage.setItem('token', data.token);
            instance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        }
        return data;
    }
    catch (error) {
        console.error('Erro ao fazer login', error);
        throw error;
    }
    
};

export const logout = async () => {
    try {

  
    //localStorage.clear();
    // sessionStorage.clear();
      await instance.post(
        "/logout"
      );
  
      localStorage.removeItem("token");
      delete instance.defaults.headers.common["Authorization"];
    } catch (error) {
      console.error("Erro ao fazer logout", error);
      throw error;
    }
  };

