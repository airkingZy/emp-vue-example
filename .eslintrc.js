/*
 * @Description: 
 * @Author: liehaozhong
 * @LastEditor: liehaozhong
 * @Date: 2021-04-13 11:33:01
 * @LastEditTime: 2021-04-13 13:04:55
 */
module.exports = {
    root: true,
    env: {
      node: true,
      // es6: true,
      browser: true
    },
    extends: [
     
    ],
    rules: {
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "max-lines-per-function": ["error", 400]
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  