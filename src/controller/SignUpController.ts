import { Request, Response } from "express";
import { createEmailPassword, findEmail } from "../service/SignUpService";

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
        const foundEmail: string = await fetchEmail(req.body.email);
        if (!foundEmail) {
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

const fetchEmail = async (email: string): Promise<string> => {
    const foundEmail: string = await findEmail(email);
    return foundEmail;
}

export { signup };