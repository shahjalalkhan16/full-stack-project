const bcrypt = require('bcrypt');
const User = require('../model/User');


const registerUser = async ({ username, email, password }) => {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashPassword });
    await user.save();
};
const getUserByUserNameOrEmail = async(username, email) => {
    return await User.findOne({$or:[(username),(email)]})
}
module.exports = {
    registerUser,getUserByUserNameOrEmail,
};