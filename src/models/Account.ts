import { Schema, model } from "mongoose";


const accountSchema = new Schema({
    userId: String,
    email: String,
    password: String
});

const Account = model('Account', accountSchema);

export default Account;