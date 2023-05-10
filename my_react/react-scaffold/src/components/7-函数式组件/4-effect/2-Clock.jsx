import React, { useEffect, useState } from 'react'
import moment from 'moment'

export default function Clock() {
    let [timeStr, setTimeStr] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));

    // 模拟生命周期方法
    useEffect(() => {
        // 启动定时器
        let timer = setInterval(() => {
            setTimeStr(moment().format('YYYY-MM-DD HH:mm:ss'));
        }, 1000)
    
        // 模拟 componentWillUnmount 生命周期函数
        return () => {
            clearInterval(timer);
        }
    }, []);
  return (
    <div style={{padding: 20, display: 'inline-block', border: 'solid 1px #abc'}}>
        {timeStr}
    </div>
  )
}
