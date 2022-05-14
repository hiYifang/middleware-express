const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/usersControllers');

router.post('/register', (req, res, next) => {
  /**
     * #swagger.tags = ['Users']
     * #swagger.summary = '註冊一位會員'
    */
  /**
   * #swagger.parameters['parameters_name'] = {
      in: 'body',
      description: '會員資訊',
      schema: {
        $nickName: '會員暱稱',
        $email: 'name@gmail.com',
        $password: 'name1234'
      }
    }
  */
  /**
   * #swagger.responses[200] = {
     description: '成功註冊會員',
     schema: { $ref: '#/definitions/Users' }
    }
   */
  /**
    #swagger.responses[400] = {
      description: '新增會員失敗',
      schema: { $ref: '#/definitions/Error' }
    }
  */
  UsersControllers.register(req, res, next);
});

module.exports = router;
