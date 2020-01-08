const bcrypt = require('bcrypt');
const saltRounds = 10;

const hash = (pw) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(pw, saltRounds, (err, hash) => {
            resolve(hash);
        })
    });
}

module.exports = hash;