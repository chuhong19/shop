//const Account = require('../models/Account');

class AccountController {

    login (req, res, next) {
        console.log('login successfully');
        res.json('login success');
    }

    create (req, res) {
        res.render('accounts/register');
    }

    store (req, res) {
        res.json(req.body);
        // const account = new Account(req.body);
        // account.save()
        //     .then(() => res.redirect('/'))
        //     .catch(next); 
    }

}

module.exports = new AccountController();