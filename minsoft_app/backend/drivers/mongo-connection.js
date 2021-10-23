const mongoose = require('mongoose');

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbUrl = process.env.DB_URL;

// const mongoUrl = `mongodb+srv://${dbUsername}:${dbPassword}@${dbUrl}/salesModule`;
const mongoUrl = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.7a3as.mongodb.net/test`


mongoose.set('runValidators', true);
console.log(mongoUrl)
const db = mongoose.connect(mongoUrl, {}, (error) => {
  if (error) {
    console.log('Error conectando a mongo');
  } else {
    console.log('Conectado a mongo');
  }
});

module.exports = db;





