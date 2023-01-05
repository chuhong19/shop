

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

    private (req, res, next){
        res.render('private');
    }

}

module.exports = new SiteController();