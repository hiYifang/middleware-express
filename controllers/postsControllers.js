const appError = require("../service/appError");
const handleErrorAsync = require("../service/handleErrorAsync");
const Post = require('../models/postsModel');
const User = require('../models/usersModel');

const posts = {
  getPosts: handleErrorAsync(async (req, res, next) => {
    const { q, sort = 'desc' } = req.query;
    const filter = q ? { content: new RegExp(q) } : {};
    const posts = await Post.find(filter)
      .populate({
        path: "editor",
        select: "nickName avatar"
      })
      .sort({ createdAt: sort === 'desc' ? -1 : 1 });
    res.status(200).json({
      status: "success",
      data: posts
    });
  }),
  insertPost: handleErrorAsync(async (req, res, next) => {
    let { content, image } = req.body;
    if (!content) {
      return next(appError(400, "新增失敗，請確認貼文的內容欄位", "content", next));
    } else if (image && !image.startsWith('https')) {
      return next(appError(400, "新增失敗，請確認貼文的圖片網址", "image", next));
    }
    // 新增至 model，先固定使用者 ID
    const editorId = '627712107054bea4d244740a';
    const post = await Post.create({ content, image, editor: editorId });
    res.status(200).json({
      status: "success",
      data: post
    });
  })
}

module.exports = posts;