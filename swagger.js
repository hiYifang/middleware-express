const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MetaWall API',
    description: 'MetaWall API 文件',
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
  tags: [
    {
      name: 'Posts',
      description: ' 貼文'
    },
    {
      name: 'Users',
      description: ' 會員'
    },
  ],
  definitions: {
    Posts: {
      editor: {
        _id: '001',
        nickName: ' 會員暱稱',
        avatar: 'https://...'
      },
      content: ' 搶到想要的 NFT 啦',
      image: 'https://...',
      createdAt: '2022-05-09T08:39:25.455Z'
    },
    Users: {
      nickName: ' 會員暱稱',
      gender: true,
      avatar: 'https://...',
      email: 'name@gmail.com',
      password: 'name1234',
    },
    Error: {
      status: 'error',
      msg: {
        errors: {
          field: { // 不同欄位名稱
            message: ' 錯誤訊息',
          },
        },
      },
    },
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);