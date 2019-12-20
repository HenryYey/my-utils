/**
 * 封装cookies相关方法
 */

// 取单个cookies
function getCookie(name) {
  let str = document.cookie;
  let arrStr = str.split("; ")

  for (let i = 0; i < arrStr.length; i++) {
    let arr = arrStr[i].split("=")
    if (arr[0] == name) {
      return arr[1]
    }
  }
}

// 存单个cookies
function setCookie(name, val, time) {
  //存的名称name,存的值val,存的天数time(过期时间)
  let oDate = new Date();
  oDate.setDate(oDate.getDate() + time);
  document.cookie = name + "=" + val + ";expires=" + oDate; //过期时间           
}

// 删除指定cookies
function removeCookie(name) {
  setCookie(name, "", -1);
}