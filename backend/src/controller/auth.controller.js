import { loginUser, logoutUser, signupUser } from '../service/auth.service.js';

export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const response = await loginUser({email, password});

        res.status(200).json(response);
    } catch(error) {
        next(error);
    }
}

export const signup = async (req, res, next) => {
    try{
        const {email, password, username} = req.body;
        console.log(`
            req.body -----> ${req.body},
            email --------> ${email},
            password -----> ${password},
            `);
        const response = await signupUser({email, password, username});

        res.status(201).json(response);
    } catch(error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    try {
        const {userId} = req.body;
        const response = await logoutUser({userId});

        res.status(200).json(response);
    } catch(error) {
        next(error);
    }
}