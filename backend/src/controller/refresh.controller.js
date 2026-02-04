export const refresh = (req, res, next) => {
    
    res.status(200).json({
        message: req.cookies?.refreshToken?.token
    });
    
} 