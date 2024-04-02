import { Schema, model } from "mongoose";


const userBirthdaySchema = new Schema({
    userId: String,
    firstname: String,
    lastname: String,
    birthdate: Date
});

const UserBirthday = model('UserBirthday',userBirthdaySchema);

export default UserBirthday;