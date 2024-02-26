const mongoose = require('mongoose');
require('dotenv').config();

const DBConnection = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    console.log(MONGO_URL);
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Database connected successfully');
    }
    catch (error) {
        console.log('Eror while connecting with DB', error.message);
    }
}

module.exports = { DBConnection }