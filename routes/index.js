var express = require('express');
var router = express.Router();
const query = require('../public/javascripts/db/dbquery');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next) => {

  res.redirect('/');
})

module.exports = router;
