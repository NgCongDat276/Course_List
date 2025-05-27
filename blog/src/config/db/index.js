const mongoose = require('mongoose');

async function connect(){
  try
    {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Failed to connect to MongoDB');
    }
}


module.exports = { connect };