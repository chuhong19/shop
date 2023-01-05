const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
const authMiddleware = require('../app/middlewares/auth.middlewares');

router.use('/register', siteController.register);
router.use('/login', siteController.login);
router.use('/private', authMiddleware.requireAuth, siteController.private);
router.use('/', siteController.index);

module.exports = router;