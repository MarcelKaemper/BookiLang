var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vocab-Trainer' });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(()=>{
    res.render('index', { title: 'Vocab-Trainer' });
  })
});

module.exports = router;
