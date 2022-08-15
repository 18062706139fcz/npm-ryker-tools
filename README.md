<!--
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-12 11:54:17
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-12 12:51:03
 * @FilePath: /ryker-tools/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 安装方式
```
npm install ryker-tools
```
### 导入方式
```js
const tools = require('ryker-tools')
```
### 格式化时间
```js
// 调用 dataFormat 对时间进行格式化
const dtStr = tools.dataFormat(new Date())
// 结果 YYYY-MM-DD HH:mm:ss
console.log(dtStr)
```
### 转义 `HTML` 中的特殊字符
```js
// 待转换的字符串
const str = '<h1>有特殊字符，需要转义</h1>'
// 转换
let htmlStr = tools.htmlEscape(str)
// 结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;/h1&gt;
console.log(htmlStr)
```
### 还原 `HTML` 中的特殊字符
```js
// 得到待转换的HTML字符串
let htmlStr = '&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;/h1&gt;'
// 转换
let htmlUnStr = tools.htmlUnEscape(htmlStr)
// 输出转换结果 '<h1>有特殊字符，需要转义</h1>'
console.log(htmlUnStr)
```
### 开源协议
+ ISC