import { login, signup } from "../controller/SignUpController";
import express from 'express';

const router = express();

router.post('/signup',signup);
router.get('/login',login);

export { router as SignupRoutes };