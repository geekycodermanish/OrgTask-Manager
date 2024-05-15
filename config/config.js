require('dotenv').config();

console.log({

    jwtSecret: process.env.JWT_SECRET,
    mongoURI: process.env.MONGO_URI,
})

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    mongoURI: process.env.MONGO_URI,
};
