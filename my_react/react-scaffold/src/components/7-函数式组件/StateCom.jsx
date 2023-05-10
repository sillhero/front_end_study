import { isPresetColor } from 'antd/es/_util/colors'
import React from 'react'
// 导入useState 函数
import { useState } from 'react'

export default function StateCom() {
    console.log(useState(100));
    let [counter, setCounter] = useState(100);
    let fn = () => {
        setCounter(counter + 1);
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={fn}>新增</button>
    </div>
  )
}
