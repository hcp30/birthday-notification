import { Schema, model } from "mongoose";


const userBirthdaySchema = new Schema({
    firstname: String,
    lastname: String,
    birthdate: Date
});

const UserBirthday = model('UserBirthday',userBirthdaySchema);

export default UserBirthday;