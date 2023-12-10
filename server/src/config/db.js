const mongoose = require('mongoose');
const DB = process.env.MONGODB_URI;

async function connectDB(){
    try {
        await mongoose.connect(DB);
        console.log('Mongoose is connected');
    } catch(error) {
        console.error('connection failed', error);
    }
}

module.exports = {
    connectDB
};