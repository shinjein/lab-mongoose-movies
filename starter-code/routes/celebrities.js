
const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router();

router.get('/celebrities', async (req, res) => {
  const celebritiesFromDB = await Celebrity.find(); 
  res.render('celebs/index', { celebritiesFromDB });
});

//Adding Celebrities
router.get('/celebrities/new', (req, res) => {
  res.render('celebs/new');
});


//Delete Celebrity
router.post('/celebrities/:celebId/delete', async (req, res) => {
  const celebId = req.params.celebId;
  await Celebrity.findByIdAndRemove(celebId);
  res.redirect('/celebrities');
})

router.get('/celebrities/:celebId', async (req, res) => {
  const celebId = req.params.celebId;
  const celeb = await Celebrity.findById(celebId);
  res.render('celebs/show', { celeb });
});

router.post('/celebrities/new', async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  await Celebrity.create({ name, occupation, catchPhrase });
  res.redirect('/celebrities');
});


module.exports = router;