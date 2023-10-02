const mongoose = require('mongoose');
require('dotenv').config();
// Define your MongoDB URI here
const mongoURL = process.env.MONGO_URL;

mongoose.set('strictQuery', false);

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;
