import { getUserByEmail, createNewUser, saveRefreshToken, deleteRefreshToken } from '../repository/user.repository.js';
import { createBcryptHash, compareBcryptHash } from '../util/bcrypt.util.js';
import { createRefreshToken, decodeRefreshToken } from '../util/jwt.util.js';
import { AuthenticationError, ValidationError, InternalError, AppError } from '../util/ErrorClient.util.js';

export const loginUser = async ({email, password}) => {
    try{
        if(!email || !password) {
            throw new AuthenticationError('Email and password required!');
        }

        const user = await getUserByEmail({email});
        if(!user) {
            throw new ValidationError('Wrong email!');
        }
        const match = compareBcryptHash(password, user.password);

        if(!match) {
            throw new ValidationError('Wrong password!');
        }

        const token = createRefreshToken(user.id);
        const savedToken = await saveRefreshToken({token, userId: user.id});
        return savedToken;

    } catch(error) {
        if(error instanceof AppError) {
            throw error;
        } else {
            throw new InternalError('Could not login!');
        }
    }
}

export const signupUser = async ({email, password, username}) => {
    try{
        if(!email || !password || !username) {
            throw new AuthenticationError('Email and password required!');
        } 

        const passwordHash = await createBcryptHash(password);
        const user = await createNewUser({email, passwordHash, username});

        return user;
    } catch(error) {
        if(error instanceof AppError) {
            throw error;
        } else {
            throw new InternalError('Could not sign up!');
        }
    }
}

export const logoutUser = async ({token}) => {
    try {
        console.log(token);
        const userId = decodeRefreshToken(token);
        const response = await deleteRefreshToken({userId});

        return response;
    }catch(error) {
        if(error instanceof AppError) {
            throw error;
        } else {
            throw new InternalError('Could not log out!');
        }
    }
}