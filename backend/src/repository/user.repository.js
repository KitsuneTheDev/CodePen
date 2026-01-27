import { db } from "../database/index.js";

export const createNewUser = async ({email, passwordHash, username}) => {
    try{
        const user = await db.User.create({
            email,
            password: passwordHash,
            username,
        });
        return user.email;
    } catch (error) {
        throw error;
    }
}

export const getUserByEmail = async ({email}) => {
    try{
        const user = await db.User.findOne({
            where: {email},
        });
        return user;
    } catch(error) {
        throw error;
    }
}

export const saveRefreshToken = async ({token, userId}) => {
    try{
        const savedToken = await db.Token.create({
            token,
            userId,
        });

        return savedToken;
    } catch(error) {
        throw error;
    }
}