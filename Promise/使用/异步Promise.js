/**
 * 封装一个函数mineReadFile
 * 作用: 读取文件
 * 参数: 文件路径
 * 返回结果: promise 对象
 */

function mineReadFile(path) {
    return new Promise((resolve, reject) => {
       require('fs').readFile(path, (err, data) => {
              if(err) {
                reject(err);
              }else{
                resolve(data);
              }
       });
    });
}

mineReadFile('./resource/1.html')
.then(data => {
    console.log(data.toString());
}, err => {
    console.log(err);
});