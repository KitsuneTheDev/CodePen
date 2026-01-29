import { db } from "../database/index.js";
import { AppError, AuthenticationError, InternalError } from "../util/ErrorClient.util.js";

export const getUserIdByRefreshToken = async (refreshToken) => {
    try{
        const tokenData = await db.Token.findOne({
            where: {token: refreshToken},
            attributes: ['userId'],
        });

        if(!tokenData) {
            throw new AuthenticationError('No user found by the token');
        }

        return tokenData.userId;
    } catch(error) {
        if(error instanceof AppError) {
            throw error;
        } else {
            throw new InternalError(`Internal error: ${error.meesage}`);
        }
    }
}