import { Request, Response } from "express";
import insertUserBirthdayInfo from "../service/BirthdayService";


class DateError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DateError";
    }
}

const postUserBirthdayInfo = (req: Request, res: Response) => {
    console.log("Hello " + req.params.firstname);
    let timestamp: number;
    if (Date.parse(req.params.date)) {
        timestamp = Date.parse(req.params.date);
    } else {
        const dateError: DateError = new DateError("cannot parse Date. Incorrect Date format.");
        res.status(500).send({
            error: dateError.name,
            description: dateError.message
        });
        throw new DateError("cannot parse Date");
    }
    const date: Date = new Date(timestamp);
    const firstname: string = req.params.firstname;
    const lastname: string = req.params.lastname;
    if (firstname && lastname) {
        insertUserBirthdayInfo(firstname,lastname,date);
    }

    res.status(200).send({
        firstname: req.params.firstname,
        lastname: req.params.lastname,
        birthday: date
    });
}

export {postUserBirthdayInfo};