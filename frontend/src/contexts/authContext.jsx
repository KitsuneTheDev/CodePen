import { createContext, useContext, useState } from "react";
import { authApi } from "../apis/authApi.js";
import { saveAccessToken } from "../utils/localStorage.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('accessToken'));

    const loginUser = async({ email, password }) => {
        setLoading(true);
        try {
            const { accessToken, userData } = await authApi.login({ email, password });
            saveAccessToken(accessToken);
            setToken(accessToken);
            setUser(userData);

            return { success: true };
        } catch(error) {
            return { success: false, error: error.message};
        } finally {
            setLoading(false);
        }
    }

    const logoutUser = async () => {
        setLoading(true);
        try {
            await authApi.logout();
            setToken(null);
            setUser(null);

            return { success: true };
        } catch(error) {
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    }

    const values = {
        loading,
        user,
        token,
        isAuthenticated: !!token,
        loginUser,
        logoutUser,
    };

    return(
        <AuthContext.Provider value={ values }>
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within AuthProvider!');
    }

    return context;
};
