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
export const checkPassword = (text) => {
  // 密码中必须包含大小写 字母、数字、特称字符，至少8个字符，最多30个字符
  const reg1 = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}');

  // 密码中必须包含字母（不区分大小写）、数字、特称字符，至少8个字符，最多30个字符；
  const reg2 = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');

  // 密码中必须包含字母（不区分大小写）、数字，至少8个字符，最多30个字符
  const reg3 = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}');
}

// 邮箱格式校验
export const checkMail = (text) => {
  const re = /^\w+@[a-z0-9]+\.[a-z]+$/i; /*邮箱不区分大小写*/
  if (re.test(text))
    return true;
  return false;
}