import axios from 'axios'
import NProgress from 'nprogress'
import Swal from "sweetalert2";

let localAction = axios.create({
    baseURL: 'http://localhost:3001'
});

localAction.interceptors.response.use((config) => {
    NProgress.start();
    return config;
});

localAction.interceptors.response.use((response) => {
    // 关闭loading效果
    NProgress.done();
    console.log(response);
    return response.data;
}, error => {
    Swal.fire({
       title: '请求失败',
       icon: 'error'
    });
    return error;
});

export default localAction;

