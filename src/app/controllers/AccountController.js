const Account = require('../models/Account');

class AccountController {

    login (req, res, next) {
        console.log('login successfully');
        res.json('login success');
    }

}

module.exports = new AccountController;