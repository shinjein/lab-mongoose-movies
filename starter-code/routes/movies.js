const express = require('express');
const Movie = require('../models/Movie.model');
const router  = express.Router();

router.get('/movies', async (req, res) => {
  const moviesDB = await Movie.find(); 
  res.render('movies/index', { moviesDB });
});

module.exports = router;