const bcrypt = require('bcrypt');
const saltRounds = 10;

const hash = (pw) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(pw, saltRounds, (err, hash) => {
            resolve(hash);
        })
    });
}

const compare = (pw, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(pw, hash, (err, res) => {
            if(!err){
                resolve(res);
            }else{
                reject(err);
            }
        })
    });
}

module.exports = {
    hash,
    compare
};