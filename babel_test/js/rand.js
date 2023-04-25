//声明一个函数 生成随机数
export function rand(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}

