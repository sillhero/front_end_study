// 创建一个 axios 实例
let localAxios = axios.create({
    //基础 url
    baseURL: 'http://localhost:3000'
});

// 添加请求拦截器
localAxios.interceptors.request.use(config => {
    //显示进度条
    NProgress.start();
    //返回 config 对象
    return config;
});

// 添加响应拦截器
localAxios.interceptors.response.use(response => {
    //关闭进度条
    NProgress.done();
    return response.data;
}, error => {
    console.log('请求失败~~~', error);
    //返回 pending 的 promise
    // return new Promise(() => {});
    throw error; // 这里的缺点就是会得到promise报错
});