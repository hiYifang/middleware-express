const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/postsControllers');

router.get('/', PostsControllers.getPosts);
router.post('/', PostsControllers.insertPost);

module.exports = router;