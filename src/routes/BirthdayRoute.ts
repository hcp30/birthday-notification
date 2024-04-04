import express from 'express';
import { postUserBirthdayInfo,fetchUserById } from '../controller/BirthdayController';

const router = express();

router.post('/', postUserBirthdayInfo);

router.get('/:userId', fetchUserById);

export {router as BirthdayRoutes};