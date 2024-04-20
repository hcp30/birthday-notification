import { Request, Response } from "express";
import {insertUserBirthdayInfo, findUserByBirthdayId} from "../service/BirthdayService";
import UserBirthdayData from '../interface/UserBirthdayData';


class DateError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DateError";
    }
}

const parseBirthDate = (birthdate: string): number => {
    let timestamp: number;
    if (Date.parse(birthdate)) {
        timestamp = Date.parse(birthdate);
    } else {
        throw new DateError("cannot parse Date. Incorrect Date format.");
    }
    return timestamp;
}

// endpoint: /birthday/

const postUserBirthdayInfo = async (req: Request, res: Response): Promise<any> => {

    const {firstname, lastname, birthdate} = req.body;
    
    console.log("Hello " + firstname);
    let timestamp: number;
    try {
        timestamp = parseBirthDate(birthdate);

        const date: Date = new Date(timestamp);

        await insertUserBirthdayInfo(firstname,lastname,date);
        res.status(200).send({
            firstname: firstname,
            lastname: lastname,
            birthday: date
        });
    } catch(err) {
        if (err instanceof Error) {
            res.status(500).send({
                errorType: err.name,
                errorMsg: err.message
            });
        }
    }
    
}

// /birthday/:birthdayId
const fetchUserByBirthdayId = async (req: Request, res: Response): Promise<any> => {
    let userBirthday: UserBirthdayData;
    if (req.params && req.params.birthdayId) {
       const result = await findUserByBirthdayId(req.params.birthdayId);
        userBirthday = {
            firstname: result?.firstname,
            lastname: result?.lastname,
            birthdate: result?.birthdate
        }
       console.log("userBirthday: " + userBirthday)
       res.status(200).send({
            userMsg: userBirthday
       });
    } else {
        res.status(404).json({
            errormsg: "birthdayId cannot be empty"
        });
    }
}

export { 
    postUserBirthdayInfo, 
    fetchUserByBirthdayId 
};