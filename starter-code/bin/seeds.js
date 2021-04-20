const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const DB_NAME = 'lab-celebrity-express';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const celebrities = [
  {
    name: 'Shakira',
    occupation: 'Pop Singer',
    catchPhrase: 'Es una tortura perderte ',
  },
  {
    name: 'Cher',
    occupation: 'Legend',
    catchPhrase: 'Do you believe in life after love?',
  },
  {
    name: 'Seal',
    occupation: 'R&B Singer',
    catchPhrase: 'Kiss from a rose',
  }
];

Celebrity.create(celebrities)
  .then(celebsFromDB => {
    console.log(`Created ${celebsFromDB.length} celebrities`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));