import { AuthenticationError } from "../util/ErrorClient.util.js";
import { decodeRefreshToken } from "../util/jwt.util.js";

export const authUser = (req, res, next) => {
    const accessToken = req.headers['Authorization']?.split(' ')[1] || null;
    if(!accessToken) {
        throw new AuthenticationError('No access token found!');
    } else {
        const userId = decodeRefreshToken(accessToken);
        req.userId = userId;
        next();
    }

}