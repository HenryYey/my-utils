/**
 * 防抖函数
 * 一定时间段内没有再触发事件，事件处理函数才会执行一次
 */

exports.debounce = (func, t) => {
  console.log(typeof func)
  // if (typeof func !== "function")
  //   throw new Error("not a funciton");
  const time = t || 1000;
  let timer = null;

  // 使用闭包，调用原函数和传参
  return function () {
    const that = this;
    const arg = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(that, arg);
      timer = null;
    }, time);
  }
}

/**
 * 节流函数
 * 一定时间内只执行一次
 */
exports.throttle = (func, t) => {
  const _time = t || 1000;
  let _timer = null;

  return function () {
    if (_timer)
      return;
    const arg = arguments;
    const that = this;

    _timer = setTimeout(() => {
      fn.apply(that, arg);
      _timer = null;
    }, _time);
  }
}