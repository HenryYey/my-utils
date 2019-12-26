
/**
 * 自动导入所有该目录的js/ts文件并封装为一个对象，统一导出
 */
import fs from 'fs';

// 过滤index
// const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');

// 本文件名为exporter,所以过滤掉exporter
const files = fs.readdirSync(__dirname).filter(file => file !== 'exporter.js');

const controllers = {};

for (const file of files) {
  if (file.toLowerCase().endsWith('js')) {
    const controller = require(`./${file}`);
    controllers[`${file.replace(/\.js/, '')}`] = controller;
  }
}

export default controllers;
