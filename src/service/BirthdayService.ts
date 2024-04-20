import UserBirthday from '../models/UserBirthday';

class FormatError extends Error {
    
    constructor(message: string) {
        super(message);
        this.name = 'FormatError';
    }
}

const insertUserBirthdayInfo =  async (firstname: string, lastname: string, dateOfBirth: Date, userId: string) => {
    console.log(`received info about user. His firstname is ${firstname} and lastname is ${lastname} and his birhtday is ${dateOfBirth}`);

    if (firstname && dateOfBirth) {
        const userBirthdayInfo = await UserBirthday.create({
            firstname : firstname,
            lastname: lastname,
            birthdate: dateOfBirth,
            userId: userId
        });
        userBirthdayInfo.birthdayId = userBirthdayInfo._id.toString();
        await userBirthdayInfo.save();

    } else {
        const error: Error = new FormatError('Incorrect Format: firstname and birthdate cannot be null or empty');
        console.log(`ErrorType:${error.name}, ErrorMessage:${error.message}`);
        throw error;
    }

};

const findUserBirthdayByBirthdayId = (birthdayId: string): Promise<any> => {
    const userBirthday = UserBirthday.findOne({
        birthdayId: birthdayId
    }).then((result) => {
        console.log("result: " + result)
        return result;
    }).catch((err) => {
        console.log("findUserByIdError: " + err);
    });
    return userBirthday;
}

const findUserBirthdaysByUserId = (userId: string) => {
    const userBirthday = UserBirthday.find({
        userId: userId
    }).then((result) => {
        console.log("result: " + result)
        return result;
    }).catch((err) => {
        console.log("findUserByIdError: " + err);
    });
    return userBirthday;
}

export {insertUserBirthdayInfo, findUserBirthdayByBirthdayId, findUserBirthdaysByUserId};