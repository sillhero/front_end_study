import axios from 'axios';
import swal from 'sweetalert';
//获取 form 元素
let form = document.querySelector('form');

// 绑定事件
form.onsubmit = async function (e) {
    // 阻止默认行为
    e.preventDefault();
    // 获取手机号
    let phone = document.querySelector('input[name=phone]').value;
    let pass = document.querySelector('input[name=pass]').value;
    try {
        // 发送 AJAX 请求
        let result = await axios.post('http://127.0.0.1:3001/api/auth/login', {
            phone,
            pass
        });
        // 将 token 存储到 localStorage 中
        localStorage.setItem('token', result.data.data.token);

        // 登录成功后, 跳转账单的列表页
        swal({
            title: "温馨提示",
            text: "登录成功",
            icon: "success",
            buttons: true,
            dangerMode: false,
        }).then(() => {
            location.href = '/accounts.html';
        })
    }catch (e) {
        swal({
            title: "温馨提示",
            text: "登录失败",
            icon: "error",
            buttons: true,
            dangerMode: true,
        })
    }
}