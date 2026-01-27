import { loginUser, signupUser } from '../service/auth.service.js';

export const login = async (req, res, next) => {
    try {
        const credentials = {email: req.body.email, password: req.body.password};
        const response = await loginUser(credentials);

        res.status(200).json(response);
    } catch(error) {
        next(error);
    }
}

export const signup = async (req, res, next) => {
    try{
        const {email, password, username} = req.body;
        console.log(`
            req.body -----> ${req.body},
            email --------> ${email},
            password -----> ${password},
            `);
        const response = await signupUser({email, password, username});

        res.status(201).json(response);
    } catch(error) {
        next(error);
    }
}