import { refreshAccessToken } from "../service/refresh.service.js";

export const refresh = async (req, res, next) => {
    
    try{
        const refreshToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjVkY2EzYi1kOWRlLTQ4MzItYjgzNy0xOTIwYjc2MzgwNDQiLCJpYXQiOjE3NzA2NjU2NDYsImV4cCI6MTc3MTI3MDQ0Nn0.N5WgRCT68WY0GWgEzQhZsxqEuWfRWA2HMHZckKTK3lg`;
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