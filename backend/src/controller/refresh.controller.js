import { refreshAccessToken } from "../service/refresh.service.js";

export const refresh = (req, res, next) => {
    
    try{
        const refreshToken = req.cookies?.refreshToken?.token;
        const newTokens = refreshAccessToken({refreshToken});
        res.cookies('refreshToken', newTokens.newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1_000 * 60 * 60 * 24 * 7,
        });
    } catch(error) {
        next(error);
    }
    res.status(200).json({
        message: req.cookies?.refreshToken?.token
    });
    
} 