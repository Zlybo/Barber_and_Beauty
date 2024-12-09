// Importamos axios
import axios from 'axios';

// URL base de nuestra API
const API_URL = 'http://10.0.2.2:3000/api';

// Objeto con nuestros métodos de API
export const api = {
    // Obtener todas las barberías
    getBarbershops: async () => {
        try {
            const response = await axios.get(`${API_URL}/barbershops`);
            return response.data;  // Axios ya convierte la respuesta a JSON
        } catch (error) {
            console.error('Error fetching barbershops:', error);
            throw error;
        }
    },

    // Obtener bookmarks de un usuario
    getBookmarks: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/bookmarks/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching bookmarks:', error);
            throw error;
        }
    },

    // Activar/desactivar un bookmark
    toggleBookmark: async (barbershopId) => {
        try {
            const response = await axios.post(`${API_URL}/bookmarks`, {
                barbershopId
            });
            return response.data;
        } catch (error) {
            console.error('Error toggling bookmark:', error);
            throw error;
        }
    },

    getBarbershopById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/barbershops/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching barbershop:', error);
            throw error;
        }
    },

    getBookmarkStatus: async (barbershopId) => {
        try {
            const response = await axios.get(`${API_URL}/bookmarks/status/${barbershopId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching bookmark status:', error);
            throw error;
        }
    },

    getAllBookmarks: async () => {
        try {
            const response = await axios.get(`${API_URL}/user/bookmarks`);
            return response.data;
        } catch (error) {
            console.error('Error fetching bookmarks:', error);
            throw error;
        }
    },

    getUserData: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/user/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

};