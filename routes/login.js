var express = require('express');
var router = express.Router();
const query = require('../public/javascripts/db/dbquery');
const hash = require('../public/javascripts/hashpw');
const validatePassword = require('../public/javascripts/validatepw');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', loggedIn: req.session.loggedIn});
});

router.post('/', async(req, res, next) => {

  let username = req.body.username;
  let pw = req.body.password;
  let msg;

  let pw_hash = await query(`SELECT password FROM login WHERE username="${username}"`);

  if(pw_hash.length > 0){
    if((await hash.compare(pw, pw_hash[0].password)) == true){
      msg = "Login successful!";
      req.session.loggedIn = true;
    }else{
      msg = "Password incorrect";
    }
  }else{
    msg = "Username not found";
  }
  // res.render('login', {title: "Login", msg: `${msg}`, loggedIn: req.session.loggedIn});
  res.redirect("/");
})

module.exports = router;
