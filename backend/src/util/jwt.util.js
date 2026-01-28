import jwt from 'jsonwebtoken';

export const createAccessToken = (userId) => {
    const newAccessToken = jwt.sign(
        {sub: userId},
        process.env.JWT_SECRET,
        {expiresIn: "15m"}
    );

    return newAccessToken;
}

export const createRefreshToken = (userId) => {
    const newRefreshToken = jwt.sign(
        {sub: userId},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: "7d"}
    );

    return newRefreshToken
}

export const verifyAccessToken = (token) => {
    const verifiedToken = jwt.verify(
        token,
        process.env.JWT_SECRET,
        {complete: true}
    ) || null;

    return verifiedToken;
}

export const verifyRefreshToken = (token) => {
    const verifiedToken = jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET,
        {complete: true}
    );

    return verifiedToken;
}

export const decodeRefreshToken = (token) => {
    const decodedToken = jwt.decode(
        token,
        process.env.JWT_REFRESH_SECRET,
        {complete: true}
    );
    console.log(decodedToken);
    return decodedToken?.sub;
}