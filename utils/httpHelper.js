// 获取url的参数，返回一个对象
function GetUrlParam() {
  const url = document.location.toString();
  let arrObj = url.split("?");
  let params = Object.create(null)
  if (arrObj.length > 1) {
    arrObjarrObj = arrObj[1].split("&");
    arrObj.forEach(item => {
      itemitem = item.split("=");
      params[item[0]] = item[1]
    })
  }
  return params;
}