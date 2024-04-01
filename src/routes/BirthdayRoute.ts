import express from 'express';
import { postUserBirthdayInfo } from '../controller/BirthdayController';

const router = express();

router.get('/first-name/:firstname/last-name/:lastname/date/:date', postUserBirthdayInfo);

export {router as BirthdayRoutes};