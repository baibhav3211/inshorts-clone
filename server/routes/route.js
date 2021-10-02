import express from 'express';
import { getNews } from '../news-controller/news-controller.js';

const router = express.Router();

router.get('/news', getNews);

export default router;