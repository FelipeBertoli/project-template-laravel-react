import instance from "../axios";

export const createUser = async (userData) => {
    try {
        const response = await instance.post('/user/create', userData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await instance.put(`/user/update`, { id: userId, ...userData });
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await instance.delete(`/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await instance.get('/user/show');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw error;
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await instance.get(`/user/show/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        throw error;
    }
};
