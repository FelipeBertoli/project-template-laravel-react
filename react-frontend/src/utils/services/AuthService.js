import instance from "../axios";

export const getCsrfTokenInvoker = async () => {
  await instance.get('/sanctum/csrf-cookie');
};

export const loginInvoker = async ({ email, password }) => {
  try {
    getCsrfTokenInvoker();

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

export const logoutInvoker = async () => {
  try {
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

