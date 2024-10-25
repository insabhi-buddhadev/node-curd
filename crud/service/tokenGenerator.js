const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        firstname: user.firstName
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = generateToken;