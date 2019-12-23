/*
 * 转换工具
 */

// 横线转驼峰
const camelize = (str) => {
  const camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
}

// 驼峰转横线并转为小写
const hyphenate = (str) => {
  const hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

// 字符串首位大写
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// 数组去重，返回一个新数组
const distinctArr = (arr) => {
  let result = []
  let objarr = []
  let obj = Object.create(null)
  arr.forEach(item => {
    if (isStatic(item)) { //是除了symbol外的原始数据  
      let key = item + '_' + getRawType(item);
      if (!obj[key]) {
        obj[key] = true
        result.push(item)
      }
    } else { //引用类型及symbol  
      if (!objarr.includes(item)) {
        objarr.push(item)
        result.push(item)
      }
    }
  })
  return resulte
}