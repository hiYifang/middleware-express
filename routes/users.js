const express = require('express');
const router = express.Router();
const handleErrorAsync = require("../service/handleErrorAsync");
const UsersControllers = require('../controllers/usersControllers');

router.post('/register', handleErrorAsync(UsersControllers.register));

module.exports = router;
