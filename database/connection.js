const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/kushal');
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error', err);
  }
};

module.exports = connectDB;