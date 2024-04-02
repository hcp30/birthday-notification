import express from 'express';
import { postUserBirthdayInfo } from '../controller/BirthdayController';

const router = express();

router.get('/', postUserBirthdayInfo);

export {router as BirthdayRoutes};