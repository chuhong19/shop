

class SiteController {

    index(req, res, next) {
        res.render('home');
    }

    login (req, res, next) {
        res.render('accounts/login');
    }

    register (req, res, next) {
        res.render('accounts/register');
    }

}

module.exports = new SiteController();