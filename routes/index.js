var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vocab-Trainer', loggedIn: req.session.loggedIn, username: req.session.user});
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(()=>{
    res.redirect("login")
    // res.render('index', { title: 'Vocab-Trainer', loggedIn: req.session.loggedIn });
  })
});

module.exports = router;
