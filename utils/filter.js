/*
 * 过滤函数库
 */

// 过滤掉对象中值为空的属性
export const filterObj = (obj) => {
  let _newPar = {};
  for (let key in obj) {
    if ((obj[key] !== 0 && obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
      _newPar[key] = obj[key];
    }
  }
  return _newPar;
}

// 过滤特殊字符, 直接删除
export const filterSpecial = (s) => {
  const pattern = new RegExp(
    "[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]",
  );
  let rs = '';
  for (let i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

// 利用正则表达式对html进行转义（字符串）
export const html2Escape = (sHtml) => {
  return sHtml.replace(/[<>&"]/g, function (c) {
    return {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;'
    } [c];
  });
}

// 利用正则表达式对html进行反转义（字符串）
export const escape2Html = (str) => {
  const arrEntities = {
    'lt': '<',
    'gt': '>',
    'nbsp': ' ',
    'amp': '&',
    'quot': '"'
  };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
    return arrEntities[t];
  })
}

// 删除字符串中所有HTML标签
export const removeHtmlTab = (tab) => {
  return tab.replace(/<[^<>]+?>/g, '');
}