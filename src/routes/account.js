const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');

router.get('/login', accountController.login);
router.post('/login', accountController.confirmLogin);
router.use('/logout', accountController.logout);
router.get('/register', accountController.create);
router.post('/store', accountController.store);
router.get('/:username/edit', accountController.edit);
router.put('/:username', accountController.update);
router.get('/profile/:token', accountController.profile);

module.exports = router;