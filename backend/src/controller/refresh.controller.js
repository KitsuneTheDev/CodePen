import { refreshAccessToken } from "../service/refresh.service.js";

export const refresh = async (req, res, next) => {
    
    try{
        const refreshToken = req.cookies?.refreshToken;
        console.log("refresh token ---->", refreshToken)
        const newTokens = await refreshAccessToken({refreshToken});
        console.log(newTokens);
        res.cookie('refreshToken', newTokens.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1_000 * 60 * 60 * 24 * 7,
        }).status(200).json({
            newAccessToken: newTokens.accessToken,
        });
    } catch(error) {
        next(error);
    }
    
} 