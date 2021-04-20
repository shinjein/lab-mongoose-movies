const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const DB_NAME = 'lab-celebrity-express';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {
    title: 'Titanic',
    genre: 'Drama',
    plot: 'Star cross lovers on a big boat',
  },
  {
    title: 'Parasite',
    genre: 'Thriller',
    plot: 'Who is the real parasite?',
  },
  {
    title: 'Oldboy',
    genre: 'Thriller',
    plot: 'A man tries to get revenge on his captor',
  }
];
// const celebrities = [
//   {
//     name: 'Shakira',
//     occupation: 'Pop Singer',
//     catchPhrase: 'Es una tortura perderte ',
//   },
//   {
//     name: 'Cher',
//     occupation: 'Legend',
//     catchPhrase: 'Do you believe in life after love?',
//   },
//   {
//     name: 'Seal',
//     occupation: 'R&B Singer',
//     catchPhrase: 'Kiss from a rose',
//   }
// ];

Movie.create(movies)
  .then(moviesDB => {
    console.log(`Created ${moviesDB.length} movies`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));