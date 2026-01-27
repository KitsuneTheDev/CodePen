import express from 'express';
import cors from 'cors';

// DATABASE IMPORTS
import { initDatabase } from './database/index.js';
import { Snippet } from './database/models/Snippet.model.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

await initDatabase();

// app.get('/health', async (req, res, next) => {
//     res.status(200).json({
//         status: 'ok',
//         message: 'CodeSnap API running!'
//     });
// });

// app.post('/api/snippets', async (req, res, next) => {
//     try {
//         console.log(req.body);
//         const { title, code, language, description, tags } = req.body;

//         const snippet = await Snippet.create({
//             title,
//             code,
//             language: language || 'bash',
//             description,
//             tags: tags || [],
//             userId: "00000000-0000-0000-0000-000000000000",
//         });

//         res.status(201).json(snippet);
//     } catch(error) {
//         res.status(500).json({error: error.message});
//     }
// });

export default app;