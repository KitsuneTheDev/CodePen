import { ApiClient } from "../utils/ApiClient.js";

const api = new ApiClient('http://localhost:5000/api/');

export const loginUser = async ({ email, password }) => {
    try {
        return await api.post({
            endpoint: 'login',
            body: {email, password}
        })
    } catch(error) {
        console.error(error);
    }
}

export const signupUser = async ({ email, password }) => {
    try {
        return await api.post({
            endpoint: 'signup',
            body: { email, password }
        })
    } catch(error) {
        console.error(error);
    }
}

export const refresh = async ({ token }) => {
    try {
        api.post({
            endpoint: 'refresh',
            token,
        })
    } catch(error) {
        console.error(error);
    }
}