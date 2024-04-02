import mongoose from "mongoose";
import UserBirthday from "../models/UserBirthday";

mongoose.connect("mongodb+srv://hirenp231994:hcp30secure231994@cluster0.skrjvv8.mongodb.net/birthday_notification?retryWrites=true&w=majority");

const insertUserBirthdayInfo =  async (firstname: string, lastname: string, dateOfBirth: Date) => {
    console.log(`received info about user. His firstname is ${firstname} and lastname is ${lastname} and his birhtday is ${dateOfBirth}`);

    const user1 = new UserBirthday({
        firstname : firstname,
        lastname: lastname,
        birthdate: dateOfBirth
    });

    await user1.save();
    
};

export default insertUserBirthdayInfo;