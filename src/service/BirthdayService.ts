import UserBirthday from "../models/UserBirthday";

const insertUserBirthdayInfo =  async (firstname: string, lastname: string, dateOfBirth: Date) => {
    console.log(`received info about user. His firstname is ${firstname} and lastname is ${lastname} and his birhtday is ${dateOfBirth}`);

    const userBirthdayInfo = await UserBirthday.create({
        firstname : firstname,
        lastname: lastname,
        birthdate: dateOfBirth
    });
    userBirthdayInfo.userId = userBirthdayInfo._id.toString();
    await userBirthdayInfo.save();

};

export default insertUserBirthdayInfo;