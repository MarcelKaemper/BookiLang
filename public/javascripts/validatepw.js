const validator = require('password-validator');

const validatePassword = (pw) => {
    return new Promise((resolve, reject) => {
        let schema = new validator();
        schema.is().min(4);
        resolve(schema.validate(pw));
    });
}

module.exports = validatePassword;