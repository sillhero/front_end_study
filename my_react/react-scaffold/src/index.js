// 导入
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

//创建根元素
let root = createRoot(document.querySelector('#root'));

//根元素渲染
root.render(<App />);

//ReactDOM.render(<App />, document.querySelector('#root'));