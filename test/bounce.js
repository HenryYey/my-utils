/**
 * 测试无法直接运行，只是说明了一个用法
 */
const {
  throttle,
  debounce
} = require("../utils/bounce");

function test1(e, text) {
  console.log(text);
}

const testFun1 = throttle(test1, 1000);
// 给节流函数传参
document.onmousemove = function (e) {
  testFun1(e, "debounceFunc")
}

const testFun2 = debounce(test1, 1000);
// 给防抖函数传参
document.onmousemove = function (e) {
  testFun2(e, "debounceFunc")
}