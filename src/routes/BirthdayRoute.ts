import express from 'express';
import { 
    postUserBirthdayInfo,
    fetchUserBirthdayByBirthdayId, 
    fetchUserBirthdaysByUserId,
    fetchUserBirthdayByDate
} from '../controller/BirthdayController';

const router = express();

router.post('/', postUserBirthdayInfo);

router.get('/user-birthday/:birthdayId', fetchUserBirthdayByBirthdayId);

router.get('/user-birthdays', fetchUserBirthdaysByUserId);

router.get('/:month/:day', fetchUserBirthdayByDate);

export {router as BirthdayRoutes};