"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserBirthdayInfo = void 0;
const BirthdayService_1 = __importDefault(require("../service/BirthdayService"));
class DateError extends Error {
    constructor(message) {
        super(message);
        this.name = "DateError";
    }
}
const postUserBirthdayInfo = (req, res) => {
    console.log("Hello " + req.params.firstname);
    let timestamp;
    if (Date.parse(req.params.date)) {
        timestamp = Date.parse(req.params.date);
    }
    else {
        const dateError = new DateError("cannot parse Date. Incorrect Date format.");
        res.status(500).send({
            error: dateError.name,
            description: dateError.message
        });
        throw new DateError("cannot parse Date");
    }
    const date = new Date(timestamp);
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    if (firstname && lastname) {
        (0, BirthdayService_1.default)(firstname, lastname, date);
    }
    res.status(200).send({
        firstname: req.params.firstname,
        lastname: req.params.lastname,
        birthday: date
    });
};
exports.postUserBirthdayInfo = postUserBirthdayInfo;
