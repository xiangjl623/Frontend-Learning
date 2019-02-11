const path = require('path');

module.exports = {
  entry: './a.js', // 入口
  output: { // 出口
    filename: 'pack.js', // 文件名
    path: path.resolve(__dirname, 'dist') // 存放目录
  }
};
