import { Query } from "mongoose";
import Account from "../models/Account";

const createEmailPassword = async (email: string, password: string) => {
    const account = await Account.create({
        email: email,
        password: password
    });

    account.userId = account._id.toString();
    account.save();
}

const findByEmail = (email: string): Promise<any> => {

    return Account.findOne({
        email: email
    }).then((result) => {
        return {
            email: result?.email,
            password: result?.password
        }
    });
}

export { createEmailPassword, findByEmail };