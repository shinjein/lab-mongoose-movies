const express = require('express');
const Movie = require('../models/Movie.model');
const router  = express.Router();

router.get('/movies', async (req, res) => {
  const moviesDB = await Movie.find(); 
  res.render('movies/index', { moviesDB });
});

//Add Movie
router.get('/movies/new', async (req, res) => {
  res.render('movies/new');
});

//show movie info
router.get('/movies/:movieId', async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await Movie.findById(movieId);
  res.render('movies/show', { movie });
});

//Add Movie POST
router.post('/movies/new', async (req, res) => {
  const { title, genre, plot } = req.body;
  await Movie.create({ title, genre, plot });
  res.redirect('/movies');
});

//Edit Movie
router.get('/movies/:movieId/edit', async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await Movie.findById(movieId);
  res.render('movies/edit', { movie });
});

//Delete Movie
router.post('/movies/:movieId/delete', async (req, res) => {
  const movieId = req.params.movieId;
  await Movie.findByIdAndRemove(movieId);
  res.redirect('/movies');
});

//Edit Movie
router.post('/movies/:movieId/edit', async (req, res) => {
    const movieId = req.params.movieId;
  const { genre, plot } = req.body;
  await Movie.findByIdAndUpdate(movieId, { genre, plot });
  res.redirect('/movies');
});
module.exports = router;