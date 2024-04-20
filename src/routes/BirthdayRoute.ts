import express from 'express';
import { postUserBirthdayInfo,fetchUserByBirthdayId } from '../controller/BirthdayController';

const router = express();

router.post('/', postUserBirthdayInfo);

router.get('/:birthdayId', fetchUserByBirthdayId);

export {router as BirthdayRoutes};