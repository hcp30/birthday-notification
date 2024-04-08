import Account from "../models/Account";

const createEmailPassword = async (email: string,password: string) => {
    const account = await Account.create({
        email: email,
        password: password
    });

    account.userId = account._id.toString();
    account.save();
}