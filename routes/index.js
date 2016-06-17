var express = require('express');
var router = express.Router();
var InxController = require('../controllers/indexController')
//this is whatever the controller is exporting

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Bella' });
//   // do the function, then the response renders a new view (index), and the paramters youre passing into it are @title = "Express"
// });

// get '/' => 'IndexController#index'
router.get('/', InxController.index)


module.exports = router;
