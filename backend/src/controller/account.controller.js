import { loginUser, logoutUser, signupUser } from '../service/account.service.js';

export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const {refreshToken, accessToken} = await loginUser({email, password});
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1_000 * 60 * 60 * 24 * 7,
        })
        .status(200)
        .json({accessToken: accessToken, refreshToken: refreshToken});
    } catch(error) {
        next(error);
    }
}

export const signup = async (req, res, next) => {
    try{
        const {email, password, username} = req.body;
        const response = await signupUser({email, password, username});

        res.status(201).json(response);
    } catch(error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    try {
        console.log("cookies --->", req.cookies);
        const refreshToken = req.cookies?.refreshToken?.token;
        const response = await logoutUser({token: refreshToken});
        res.clearCookie('refreshToken', {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        })
        .status(200)
        .json(response);
    } catch(error) {
        next(error);
    }
}