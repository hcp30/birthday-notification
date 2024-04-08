import express from 'express';
import { postUserBirthdayInfo,fetchUserById } from '../controller/BirthdayController';

const router = express();

router.post('/', postUserBirthdayInfo);

router.get('/:birthdayId', fetchUserById);

export {router as BirthdayRoutes};