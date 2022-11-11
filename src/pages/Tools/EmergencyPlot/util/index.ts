/*
 * @Description: 工具
 */

// 函数截流
function throttle(fn: any, delay: any) {
  let pre = Date.now();
  return function () {
    // @ts-ignore
    const context = this;
    const args = arguments;
    const now = Date.now();
    if (now - pre >= delay) {
      fn.apply(context, args);
      pre = Date.now();
    }
  };
}

export { throttle };

export default {
  throttle,
};
