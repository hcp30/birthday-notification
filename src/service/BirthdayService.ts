import UserBirthday from "../models/UserBirthday";

class FormatError extends Error {
    
    constructor(message: string) {
        super(message);
        this.name = 'FormatError';
    }
}

const insertUserBirthdayInfo =  async (firstname: string, lastname: string, dateOfBirth: Date) => {
    console.log(`received info about user. His firstname is ${firstname} and lastname is ${lastname} and his birhtday is ${dateOfBirth}`);

    if (firstname && dateOfBirth) {
        const userBirthdayInfo = await UserBirthday.create({
            firstname : firstname,
            lastname: lastname,
            birthdate: dateOfBirth
        });
        userBirthdayInfo.userId = userBirthdayInfo._id.toString();
        await userBirthdayInfo.save();

    } else {
        const error: Error = new FormatError('Incorrect Format: firstname and birthdate cannot be null or empty');
        console.log(`ErrorType:${error.name}, ErrorMessage:${error.message}`);
        throw error;
    }

};

export default insertUserBirthdayInfo;