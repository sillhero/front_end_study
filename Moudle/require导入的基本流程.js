// 伪代码

function require(file) {
    // 1、将相对路径转为绝对路径，定位目标文件
    let absolutePath = path.resolve(__dirname, file);

    // 2、缓存检测
    if (caches[absolutePath]) {
        return caches[absolutePath];
    }
}

