import { Request, Response } from "express";
import insertUserBirthdayInfo from "../service/BirthdayService";


class DateError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DateError";
    }
}

const postUserBirthdayInfo = (req: Request, res: Response) => {

    const {firstname, lastname, birthdate} = req.body;
    
    console.log("Hello " + firstname);
    let timestamp: number;
    if (Date.parse(birthdate)) {
        timestamp = Date.parse(birthdate);
    } else {
        const dateError: DateError = new DateError("cannot parse Date. Incorrect Date format.");
        res.status(500).send({
            error: dateError.name,
            description: dateError.message
        });
        throw new DateError("cannot parse Date");
    }
    const date: Date = new Date(timestamp);
    if (firstname && lastname) {
        insertUserBirthdayInfo(firstname,lastname,date);
    }

    res.status(200).send({
        firstname: firstname,
        lastname: lastname,
        birthday: date
    });
}

export {postUserBirthdayInfo};