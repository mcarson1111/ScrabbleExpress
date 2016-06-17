var express = require('express');
var router = express.Router();
var ScrabbleController = require('../controllers/scrabble');

/* GET home page. */
router.get('/chart', ScrabbleController.showChart);

router.get('/score', ScrabbleController.score);

router.post('/score', ScrabbleController.score);






module.exports = router;
