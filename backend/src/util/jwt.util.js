import jwt from 'jsonwebtoken';
import { AuthenticationError } from './ErrorClient.util.js';

export const createAccessToken = (userId) => {
    console.log('CREATING ACCESS TOKEN...');
    const newAccessToken = jwt.sign(
        {sub: userId},
        process.env.JWT_SECRET,
        {expiresIn: "15m"}
    );
    console.log('ACCESS TOKEN CREATED');
    return newAccessToken;
}

export const createRefreshToken = (userId) => {
    console.log('CREATING REFRESH TOKEN...');
    const newRefreshToken = jwt.sign(
        {sub: userId},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: "7d"}
    );
    console.log('REFRESH TOKEN CREATED');

    return newRefreshToken
}

export const verifyAccessToken = (token) => {
    const verifiedToken = jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, userId) => {
            if(err) {
                if(err.name === 'TokenExpiredError') {
                    throw new AuthenticationError('Token expired!');
                } else {
                    throw new AuthenticationError('Invalid Token');
                }
            } else {
                return userId;
            }
        }
    ) || null;

    return verifiedToken;
}

export const verifyRefreshToken = (token) => {
    const verifiedToken = jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET,
        (err, userId) => {
            if(err) {
                if(err.name === 'TokenExpiredError') {
                    throw new AuthenticationError('Token expired');
                } else {
                    throw new AuthenticationError('Invalid token');
                }
            } else {
                return userId;
            }
        }
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