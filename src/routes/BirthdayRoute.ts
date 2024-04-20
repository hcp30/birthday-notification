import express from 'express';
import { 
    postUserBirthdayInfo,
    fetchUserBirthdayByBirthdayId, 
    fetchUserBirthdaysByUserId 
} from '../controller/BirthdayController';

const router = express();

router.post('/', postUserBirthdayInfo);

router.get('/user-birthday/:birthdayId', fetchUserBirthdayByBirthdayId);

router.get('/user-birthdays', fetchUserBirthdaysByUserId);

export {router as BirthdayRoutes};