//防抖
export function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

//日期格式化函数
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    // RegExp.$1 这个全局对象就是 /(y+)/.test(fmt) 匹配到的字符串
    //date.getFullYear() 拿到传进来的时间戳的年份
    //date.getFullYear() + '' 这步操作是为了将拿到的数字转换成字符串
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};