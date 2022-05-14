const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/usersControllers');

router.post('/register', UsersControllers.register);

module.exports = router;
