import { getUserIdByRefreshToken } from "../repository/token.repository.js";
import { saveRefreshToken } from "../repository/user.repository.js";
import { AuthenticationError, ConflictError } from "../util/ErrorClient.util.js"
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../util/jwt.util.js"

export const refreshAccessToken = ({refreshToken}) => {
    if(!refreshToken) {
        throw new AuthenticationError('No refresh token found');
    }

    const userIdInToken = verifyRefreshToken(refreshToken);
    const userIdInDatabase = getUserIdByRefreshToken(refreshToken) || null;

    if(userIdInToken !== userIdInDatabase) {
        throw new ConflictError('token user id and db user id is not matched');
    }

    const newRefreshToken = createRefreshToken(userId);
    const savedTokenUserId = saveRefreshToken({token: newRefreshToken, userId});
    const newAccessToken = createAccessToken(userId);

    return {refreshToken: newRefreshToken, accessToken: newAccessToken, userId: savedTokenUserId};
}