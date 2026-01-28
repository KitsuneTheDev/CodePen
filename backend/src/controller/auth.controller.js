import { loginUser, logoutUser, signupUser } from '../service/auth.service.js';

export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const response = await loginUser({email, password});
        res.cookie('refreshToken', response, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1_000 * 60 * 60 * 24 * 7,
        });
        res.send('Cookie sent!');
        res.status(200).json("Logged in!");
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
        const refreshToken = req.cookies?.refreshToken;
        const response = await logoutUser({token: refreshToken});
        res.status(200).json(response);
    } catch(error) {
        next(error);
    }
}