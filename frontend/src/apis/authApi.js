import { ApiClient } from "../utils/ApiClient.js";

const api = new ApiClient('http://localhost:5000/api');

export const authApi = {
    login: async ({ email, password }) => api.post({ endpoint: '/login', body: { email, password } }),
    
    signup: async ({ email, password, username }) => api.post({ endpoint: '/signup', body: { email, password, username } }),

    logout: async () => api.post({ endpoint: '/logout' }),
    
    refresh: async () => api.post({ endpoint: '/refresh' }),
}