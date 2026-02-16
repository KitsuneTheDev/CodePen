import { getUserIdByRefreshToken } from "../repository/token.repository.js";
import { saveRefreshToken } from "../repository/user.repository.js";
import { AuthenticationError, ConflictError } from "../util/ErrorClient.util.js"
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../util/jwt.util.js"

export const refreshAccessToken = async ({refreshToken}) => {
    if(!refreshToken) {
        throw new AuthenticationError('No refresh token found');
    }

    const userIdInToken = verifyRefreshToken(refreshToken)?.sub;
    const userIdFromDatabase = await getUserIdByRefreshToken(refreshToken);
    console.log(userIdInToken, userIdFromDatabase);

    if(!userIdFromDatabase || userIdInToken !== userIdFromDatabase) {
        throw new ConflictError('Token mismatch or invalid session');
    }
    const userId = userIdFromDatabase;
    const newRefreshToken = createRefreshToken(userId);
    const savedToken = await saveRefreshToken({token: newRefreshToken, userId});
    const newAccessToken = createAccessToken(userId);

    return {
        refreshToken: newRefreshToken,
        accessToken: newAccessToken,
        userId: savedToken.id,
    };
}