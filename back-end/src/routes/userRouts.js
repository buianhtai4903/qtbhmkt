const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Định nghĩa route
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
