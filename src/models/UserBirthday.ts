import { Schema, model } from "mongoose";


const userBirthdaySchema = new Schema({
    birthdayId: String,
    firstname: String,
    lastname: String,
    birthdate: Date,
    userId: String
});

const UserBirthday = model('UserBirthday',userBirthdaySchema);

export default UserBirthday;