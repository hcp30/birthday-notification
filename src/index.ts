// import { Request, Response } from "express";
import express from "express";
import {BirthdayRoutes} from "./routes/BirthdayRoute"

const app = express();

app.use('/birthday', BirthdayRoutes);

const port = 8080;

app.listen(port,() => {
    console.log(`listening on port: ${port}`);
});