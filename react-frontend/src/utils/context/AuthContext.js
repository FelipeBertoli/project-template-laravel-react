import { createContext, useContext, useEffect, useState } from 'react';
import instance from '../axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const bootstrap = async () => {
      try {
        await instance.get("/sanctum/csrf-cookie", { withCredentials: true });
        console.log("CSRF Token carregado");
      } catch (err) {
        console.error("Erro ao carregar CSRF:", err);
      }
    };

    bootstrap();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
