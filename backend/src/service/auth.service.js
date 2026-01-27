import { getUserByEmail, createNewUser } from '../repository/user.repository.js';
import { createBcryptHash, compareBcryptHash } from '../util/bcrypt.util.js';

import { AuthenticationError, ValidationError, InternalError, AppError } from '../util/ErrorClient.util.js';

export const loginUser = async ({email, password}) => {
    try{
        if(!email || !password) {
            throw new AuthenticationError('Email and password required!');
        }

        // JWT COMPARISON HERE

        const user = await getUserByEmail({email});
        if(!user) {
            throw new ValidationError('Wrong email!');
        }
        const match = compareBcryptHash(password, user.password);

        if(!match) {
            throw new ValidationError('Wrong password!');
        }
        
        return user.email;

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
        if(!email || !password, !username) {
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