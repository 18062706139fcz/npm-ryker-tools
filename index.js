/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-12 11:54:41
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-12 12:33:24
 * @FilePath: /ryker-tools/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 入口文件
const data = require('./src/dataFormat')
const escape = require('./src/htmlEscape')
// 展开运算符，展开我的方法
module.exports = {
    ...data,
    ...escape
}