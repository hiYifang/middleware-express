const express = require('express');
const router = express.Router();
const handleErrorAsync = require("../service/handleErrorAsync");
const PostsControllers = require('../controllers/postsControllers');

router.get('/', handleErrorAsync(PostsControllers.getPosts));
router.post('/', handleErrorAsync(PostsControllers.insertPost));

module.exports = router;