const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/postsControllers');

router.get('/', (req, res, next) => {
  /**
      * #swagger.tags = ['Posts']
      * #swagger.summary = '取得全部貼文'
    */
  /**
    * #swagger.parameters['q'] = {
      in: 'query',
      description: '關鍵字',
      type: 'string',
    }
    #swagger.parameters['sort'] = {
      in: 'query',
      description: '排序方式，desc 由新到舊，asc 由舊到新',
      type: 'string',
    }
  */
  /**
     * #swagger.responses[200] = {
       description: '成功取得資料',
       schema: { $ref: '#/definitions/Posts' }
     }
   */
  PostsControllers.getPosts(req, res, next);
});

router.post('/', (req, res, next) => {
  /**
    * #swagger.tags = ['Posts']
    * #swagger.summary = '新增一則貼文'
   */
  /**
   * #swagger.parameters['parameters_name'] = {
      in: 'body',
      description: '貼文資訊',
      schema: {
        $content: '貼文內容',
        image: '貼文圖片來源'
      }
    }
  */
  /**
  * #swagger.responses[200] = {
   description: '成功新增貼文',
   schema: { $ref: '#/definitions/Posts' }
  }
  */
  /**
    #swagger.responses[400] = {
      description: '新增貼文失敗',
      schema: { $ref: '#/definitions/Error' }
    }
  */
  PostsControllers.insertPost(req, res, next);
});

module.exports = router;