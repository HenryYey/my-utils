/**
 * 封装了一些常用的前端校验
 */

/**
 * 表单校验
 */

// 校验手机号
export const checkPhone = (text) => {
  if (!(/^1[0-9]{10}$/.test(text))) {
    console.log('手机号码输入有误，请检查');
    return false;
  }
  return true;
}

// 密码复杂度校验正则，自行复制粘贴
const checkPassword = (text) => {
  // 密码中必须包含大小写 字母、数字、特称字符，至少8个字符，最多30个字符
  const reg1 = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}');

   // 密码中必须包含字母（不区分大小写）、数字、特称字符，至少8个字符，最多30个字符；
  const reg2 = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');

  // 密码中必须包含字母（不区分大小写）、数字，至少8个字符，最多30个字符
  const reg3 = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}');
}

// 邮箱格式校验
export const checkMail = (text) => {
  const re=/^\w+@[a-z0-9]+\.[a-z]+$/i; /*邮箱不区分大小写*/
  if (re.test(text))
    return true;
  return false;
}

/**
 * 判断设备
 * 详见更多👇
 * https://blog.csdn.net/weixin_36810906/article/details/84230229
 */

// 判断是移动端还是PC
export const isPC = () => {
  let userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 判断Android还是iOS
export const checkDevice = () => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  console.log(u);
  if (isAndroid) {
    return 'Android';
  } else if (isiOS) {
    return 'iOS';
  } else {
    return 'others';
  }
}

// 判断是否在微信中打开
export const isWeiXin = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('micromessenger') != -1) {
    return true;
  } else {
    return false;
  }
}