import { getUserIdByRefreshToken } from "../repository/token.repository.js";
import { AuthenticationError, ConflictError } from "../util/ErrorClient.util.js"
import { verifyRefreshToken } from "../util/jwt.util.js"

export const refreshAccessToken = ({refreshToken}) => {
    if(!refreshToken) {
        throw new AuthenticationError('No refresh token found');
    }

    const userIdInToken = verifyRefreshToken(refreshToken);
    const userIdInDatabase = getUserIdByRefreshToken(refreshToken);

    if(userIdInToken !== userIdInDatabase) {
        throw new ConflictError('token user id and db user id is not ')
    }
}