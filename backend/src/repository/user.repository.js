import { db } from "../database/index.js";

export const createNewUser = async ({email, passwordHash, username}) => {
    console.log('CREATING USER...', email, passwordHash, username);
    try{
        const user = await db.User.create({
            email,
            password: passwordHash,
            username,
        });
        console.log('USER CREATED');
        return user.email;
    } catch (error) {
        throw error;
    }
}

export const getUserByEmail = async ({email}) => {
    return;
}
