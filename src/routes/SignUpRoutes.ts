import { signup } from "../controller/SignUpController";
import express from 'express';

const router = express();

router.post('/signup',signup);

export { router as SignupRoutes }