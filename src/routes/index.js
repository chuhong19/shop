const accountRouter = require('./account');
const siteRouter = require('./site');

function route(app) {
    app.use('/account', accountRouter);
    app.use('/', siteRouter);
}

module.exports = route;