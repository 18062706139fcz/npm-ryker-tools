// 格式化事件
function dataFormat(dataStr) {
    const date = new Date(dataStr)
    const year = date.getFullYear()
    const month = padZero(date.getMonth() + 1) // 月份是从0开始的
    const day = padZero(date.getDay())
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    const seconds = padZero(date.getSeconds())
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
// 补0
function padZero(n) {
    return n > 9 ? n : '0' + n
}
module.exports = {
    dataFormat
}