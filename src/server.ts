import 'dotenv/config'
import express from "express";
import {BirthdayRoutes} from "./routes/BirthdayRoute"
import { SignupRoutes } from './routes/SignUpRoutes';
import { verifyAuth } from './middleware/TokenAuth';
import mongoose from 'mongoose';
import cors from 'cors';

console.log(`process: ${process.env}`);
mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`);


const app = express();

app.use(cors());
app.use(express.json());

app.use('/birthday', verifyAuth , BirthdayRoutes);
app.use('/auth', SignupRoutes);

const port = process.env.PORT;

app.listen(port,() => {
    console.log(`listening on port: ${port}`);
});