import { AuthenticationError } from "../util/ErrorClient.util.js";
import { verifyAccessToken } from "../util/jwt.util.js";

export const authUser = (req, res, next) => {
    console.log(req.cookies?.refreshToken?.token);
    const accessToken = req.headers['authorization']?.split(' ')[1] || null;
    console.log(accessToken);
    if(!accessToken) {
        throw new AuthenticationError('No access token found!');
    } else {
        const userId = verifyAccessToken(accessToken);
        req.userId = userId;
        next();
    }

}