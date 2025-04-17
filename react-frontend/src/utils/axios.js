import axios from "axios";

const baseURL = 'http://localhost:8000';

const instance = axios.create({
    baseURL: `${baseURL}/api/`, // Ajuste para evitar problemas de rota
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

// Configurar token automaticamente caso exista
const token = localStorage.getItem('token');
if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;
