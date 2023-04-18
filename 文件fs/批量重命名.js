  const fs =require('fs');

const files = fs.readdirSync('./');

// 遍历数组
  files.forEach(item => {
      // 判断
      let data = item.split('-');
      let [num, name] = data;
      console.log(num, name);
      console.log(data);
  })