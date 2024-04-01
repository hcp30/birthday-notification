"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Request, Response } from "express";
const express_1 = __importDefault(require("express"));
const BirthdayRoute_1 = require("./routes/BirthdayRoute");
const app = (0, express_1.default)();
app.use('/birthday', BirthdayRoute_1.BirthdayRoutes);
const port = 8080;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
