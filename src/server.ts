import 'dotenv/config'
import express from "express";
import {BirthdayRoutes} from "./routes/BirthdayRoute"
import mongoose from 'mongoose';

console.log(`process: ${process.env}`);
mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`);


const app = express();

app.use(express.json())

app.use('/birthday', BirthdayRoutes);

const port = process.env.PORT;

app.listen(port,() => {
    console.log(`listening on port: ${port}`);
});