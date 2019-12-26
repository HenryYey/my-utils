/**
 * 测试过滤函数
 */
import * as filters from "../utils/filter"

(() => {
// 转义和反转义
const ht = `<div>&</div>
<div>&amp;</div>
<div id="testdiv"></div>
`
const a = filters.html2Escape(ht);
console.log(`测试转义`, a);

const b = filters.escape2Html(a);
console.log(`测试反转义`, b);

// 删除html标签
console.log("测试删除所有html标签", ht);
// 测试过滤空数据
const obj = {
  a: null,
  b: undefined,
  c: "",
  d: "yes!"
}
console.log(filters.filterObj(obj));

// 测试过滤特殊字符
const special = filters.filterSpecial("测试过滤特殊字符#!$!%@#$@@yessss");
console.log(special);
})();