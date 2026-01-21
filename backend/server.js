import app from './app.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({path: ".env.development"});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});