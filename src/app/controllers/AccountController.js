const Account = require('../models/Account');

class AccountController {

    login (req, res, next) {
        res.render('accounts/login');
    }

    confirmLogin (req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        Account.findOne({username, password})
            .then(data => {
                    if (data) {
                        res.json('login success');
                    }
                    else {
                        res.json('wrong username or password');
                    }
                })
            .catch(next);
    }

    create (req, res, next) {
        res.render('accounts/register');
    }

    store (req, res, next) {
        const account = new Account(req.body);
        account.save()
             .then(() => res.redirect('/home'))
             .catch(next); 
    }

    edit (req, res, next) {
        res.render('accounts/edit');
    }
}

module.exports = new AccountController();