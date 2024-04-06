import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const db_connect = async() => {
    mongoose.connect('mongodb://localhost:27017/express_mongo')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database', err);
    });
}

export default db_connect;