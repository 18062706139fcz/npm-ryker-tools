/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-12 12:31:01
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-12 12:31:34
 * @FilePath: /ryker-tools/src/htmlEscape.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 定义转义 HTML 字符的函数
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, (match) => {
        switch(match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// 定义反转 HTML 字符的函数
function htmlUnEscape(htmlStr) {
    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch(match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}
module.exports = {
    htmlEscape,
    htmlUnEscape
}