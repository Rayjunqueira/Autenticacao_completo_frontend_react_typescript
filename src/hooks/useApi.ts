import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API,
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'Example', email: 'example@email.com' },
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, username: 'Example', email: 'example@email.com' },
            token: '1232dsds434sd'
        };
        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    signup: async (username: string, email: string, password: string) => {
        return {
            user: { id: 3, username: 'Example', email: 'example@email.com' },
        };
        const response = await api.post('/signup', { username, email, password });
        return response.data;
    },
    activate: async (email: string, token: string) => {
        return {
            user: { id: 3, email: 'example@email.com', token: '1232dsds434sd' },
        };
        const response = await api.post('/activate', { email, token });
        return response.data;
    },
    forgetPass: async (email: string) => {
        return {
            user: { id: 3, email: 'example@email.com', token: '1232dsds434sd' },
        };
        const response = await api.post('/forgetpass', { email });
        return response.data;
    },
    logout: async () => {
        return {
            status: true,
        }
        const response = await api.post('/logout');
        return response.data;
    },
});