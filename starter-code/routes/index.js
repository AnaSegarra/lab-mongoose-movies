const express = require('express');
const router = express.Router();
const celebrities = require('./celebrities');
const movies = require('./movies');

/* use celebrities and movie routers */
router.use('/celebrities', celebrities);
router.use('/movies', movies);

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'MoviesDB' });
});

module.exports = router;
