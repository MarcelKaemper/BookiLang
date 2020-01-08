var express = require('express');
var router = express.Router();
const query = require('../public/javascripts/db/dbquery');
const hash = require('../public/javascripts/hashpw');
const validatePassword = require('../public/javascripts/validatepw');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/register', async(req, res, next) => {

  let pw = req.body.password;
  let username = req.body.username;
  let msg;

  if(pw == req.body.conf_password) {
    if(await validatePassword(pw)){
      let hashed_pw = await hash(pw);
      let unames = await query(`SELECT username FROM login WHERE username="${username}"`);
      if(unames <= 0){
        await query(`INSERT INTO login(username, password) VALUES ("${username}","${hashed_pw}");`);
        msg = "Registration successful! You may log in now";
      }else{
        msg = "Username is already taken";
      }
    }else{
      msg = "Password is not strong enough";
    }
  }else{
    msg = "Passwords don't match";
  }
  res.render('register', {title: "Register", msg: `${msg}`});
})

module.exports = router;
