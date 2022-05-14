const appError = require("../service/appError");
const handleErrorAsync = require("../service/handleErrorAsync");
const Post = require('../models/postsModel');
const User = require('../models/usersModel');

const users = {
  register: handleErrorAsync(async (req, res, next) => {
    let { nickName, email, password } = req.body;
    const emailExist = await User.findOne({ email });
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (!nickName) {
      return next(appError(400, "註冊失敗，請填寫暱稱欄位", "nickName", next))
    } else if (nickName && nickName.length < 2) {
      return next(appError(400, "暱稱至少 2 個字元以上", "nickName", next))
    } else if (!email) {
      return next(appError(400, "註冊失敗，請填寫 Email 欄位", "email", next))
    } else if (email.search(emailRule) === -1) {
      return next(appError(400, "Email 格式錯誤，請重新填寫 Email 欄位", "email", next))
    } else if (emailExist) {
      return next(appError(400, "Email 已被註冊，請替換新的 Email", "email", next))
    } else if (!password) {
      return next(appError(400, "註冊失敗，請填寫 Password 欄位", "password", next))
    } else if (password && password.length < 8) {
      return next(appError(400, "密碼需至少 8 碼以上，並英數混合", "password", next))
    }
    // 新增至 model
    const user = await User.create({ nickName, email, password });
    res.status(200).json({
      status: "success",
      data: {
        nickName: user.nickName,
        gender: user.gender,
        avatar: user.avatar
      }
    });
  })
}

module.exports = users;