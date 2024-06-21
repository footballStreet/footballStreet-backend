import User from '../models/user.js';
import Encrypt from '../utils/Encrypt.js';

class UserController {
    async getUsers(__req, __res) {
        const users = await User.findAll({raw: true});
        return users;
    };

    async createUser(req, __res) {
        const {username, firstname, lastname, surname, year, day, month, phone, email, password} = req.body;
        const hashPassword = new Encrypt().hash(password);
        const correctFormatDateBirthday = new Date(year, day, month);
        const newUser = await User.create(
                {username, firstname, lastname, surname, birthday: correctFormatDateBirthday, phone, email, password: hashPassword}, 
                { fields: ['username', 'firstname', 'lastname', 'surname', 'birthday','phone', 'email', 'password'] });
        return newUser;
    }
}

export default UserController;