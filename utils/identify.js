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

/*
 * 识别各种浏览器及平台
 */
//运行环境是浏览器  
export const inBrowser = typeof window !== 'undefined';
//运行环境是微信  
export const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
export const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
//浏览器 UA 判断  
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();
export const isIE = UA && /msie|trident/.test(UA);
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
export const isEdge = UA && UA.indexOf('edge/') > 0;
export const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// 获取浏览器信息
export const getExplorerInfo = () => {
  const t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie") ? { //ie < 11  
    type: "IE",
    version: Number(t.match(/msie ([\d]+)/)[1])
  } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11  
    type: "IE",
    version: 11
  } : 0 <= t.indexOf("edge") ? {
    type: "Edge",
    version: Number(t.match(/edge\/([\d]+)/)[1])
  } : 0 <= t.indexOf("firefox") ? {
    type: "Firefox",
    version: Number(t.match(/firefox\/([\d]+)/)[1])
  } : 0 <= t.indexOf("chrome") ? {
    type: "Chrome",
    version: Number(t.match(/chrome\/([\d]+)/)[1])
  } : 0 <= t.indexOf("opera") ? {
    type: "Opera",
    version: Number(t.match(/opera.([\d]+)/)[1])
  } : 0 <= t.indexOf("Safari") ? {
    type: "Safari",
    version: Number(t.match(/version\/([\d]+)/)[1])
  } : {
    type: t,
    version: -1
  }
}