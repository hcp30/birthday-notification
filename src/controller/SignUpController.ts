import { Request, Response } from "express";
import { createEmailPassword, findByEmail } from "../service/SignUpService";
import Account from "../models/Account";
import AccountData from "../interface/AccountData";

const validateEmailPassword = (email: string, password: string): boolean => {
    if (!email || !password) {
        return false;
    }
    if (!email.includes('@')) {
        return false;
    }

    return true;
}

const signup = async (req: Request, res: Response): Promise<Response> => {
    if (validateEmailPassword(req.body.email, req.body.password)) {
        const foundAccount = await fetchByEmail(req.body.email);
        if (!foundAccount) {
            createEmailPassword(req.body.email,req.body.password);
            res.status(200).send({
                msg: "Email and Passowrd created!"
            });
        } else {
            res.status(500).send({
                msg: "email already Exists!"
            });
        }
    } else {
        res.status(400).send({
            msg: "Incorrect format"
        });
    }

    return res;
}

const login = async (req: Request, res: Response): Promise<Response> => {

    const foundAccount = await fetchByEmail(req.body.email);
    const email = req.body.email;
    const password = req.body.password;

    if (validateEmailPassword(email, password)) {
        if (foundAccount && password === foundAccount.password) {
            res.status(200).send({
                msg: "Login Successful!"
            });
        } else {
            res.status(401).send({
                msg: "incorrect email/password"
            });
        }
    } else {
        res.status(400).send({
            msg: "incorrect format"
        })
    }
    return res;
}

const fetchByEmail = async (email: string): Promise<AccountData> => {
    const foundEmail: AccountData = await findByEmail(email);
    console.log(typeof Account);
    return foundEmail;
}

export { signup, login };