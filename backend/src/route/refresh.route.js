import express from 'express';
import { refresh } from '../controller/refresh.controller.js';

const router = express.Router();

router.get('/refresh', refresh);

export default router;