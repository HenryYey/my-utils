/**
 * 封装了crypto-js 库的常用加密函数
 * https://github.com/brix/crypto-js
 * install
  npm install crypto-js 
 */

import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import MD5 from 'crypto-js/md5';

/*
 * sha256加密
 * 一种文件摘要算法
 */ 
export const hashDigest = sha256(message);

export const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

/*
 * MD5加密
 * 对信息加密，可用于判断是否是同一个信息
 */

export const md5 = MD5(content);
