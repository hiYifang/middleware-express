const appError = require("../service/appError");
const Post = require('../models/postsModel');
const User = require('../models/usersModel');

const users = {
  register: async (req, res, next) => {
    /**
     * #swagger.tags = ['Users']
     * #swagger.summary = ' 註冊一位會員'
    */
    /**
     * #swagger.parameters['parameters_name'] = {
        in: 'body',
        description: ' 會員資訊 ',
        schema: {
          $nickName: ' 會員暱稱 ',
          $email: 'name@gmail.com',
          $password: 'name1234'
        }
      }
    */
    let { nickName, email, password } = req.body;
    const emailExist = await User.findOne({ email });
    /**
      #swagger.responses[400] = {
        description: ' 新增會員失敗 ',
        schema: { $ref: '#/definitions/Error' }
      }
   */
    if (!nickName) {
      return next(appError(400, "註冊失敗，請填寫暱稱欄位", next, "nickName"))
    } else if (nickName && nickName.length < 2) {
      return next(appError(400, "暱稱至少 2 個字元以上", next, "nickName"))
    } else if (!email) {
      return next(appError(400, "註冊失敗，請填寫 Email 欄位", next, "email"))
    } else if (emailExist) {
      return next(appError(400, "Email 已被註冊，請替換新的 Email", next, "email"))
    } else if (!password) {
      return next(appError(400, "註冊失敗，請填寫 Password 欄位", next, "password"))
    } else if (password && password.length < 8) {
      return next(appError(400, "密碼需至少 8 碼以上，並英數混合", next, "password"))
    }
    // 新增至 model
    const user = await User.create({ nickName, email, password });
    /**
     * #swagger.responses[200] = {
       description: ' 成功註冊會員 ',
       schema: { $ref: '#/definitions/Users' }
    }
    */
    res.status(200).json({
      status: "success",
      data: user
    });
  }
}

module.exports = users;