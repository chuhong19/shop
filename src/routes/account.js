const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');

router.get('/login', accountController.login);
router.post('/login', accountController.confirmLogin);
router.get('/register', accountController.create);
router.post('/store', accountController.store);
router.get('/edit', accountController.edit);

module.exports = router;