const Account = require('../models/Account');
const { mongooseToObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');

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
                        var token = jwt.sign({_id: data._id}, 'mk');
                        res.cookie('token', token);
                        res.redirect('/private');
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

    // token 
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ExNTBjY2YwMjc4MGE5MWI3MTY4MzEiLCJpYXQiOjE2NzIxMzMxMDR9.4b_mX1vP68pEqmcYv-yoszrj7O4U9pmXwpCGTYmzB5s

    profile (req, res, next) {
        var token = req.params.token;
        var result = jwt.verify(token, 'mk');
        if (!result) {
            return res.json('login required');
        }
        else {
            var id = result._id;
            Account.findOne({_id: id})
                .then( account => {
                    res.render('accounts/myhome', {account: mongooseToObject(account)})
                })
                .catch(next);
            
        } 
    }

    edit (req, res, next) {
        Account.findOne({username: req.params.username})
            .then(account => res.render('accounts/edit', {
                account: mongooseToObject(account)
            }))
            .catch(next);
    }

    update(req, res, next) {
        Account.updateOne({ username: req.params.username }, req.body)
            .then(res.json('update success'))
            .catch(next);
    }
}

module.exports = new AccountController();