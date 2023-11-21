const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
// const jwtMiddleware = require('./middlewares/authJwt');


router.post('/signup', authController.postSignup);
//router.post('/login', authController.postLogin);

module.exports = router;
