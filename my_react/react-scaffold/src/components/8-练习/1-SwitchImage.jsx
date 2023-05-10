import React from 'react'
import Button from './1-Button'
import Image from './1-Image'

export default function SwitchImage() {
    let [image, setImage] = useState("http://api.xiaohigh.com/image/random");

    // 声明一个函数，用于切换图片
    let change = () => {
        setImage("http://api.xiaohigh.com/image/random?time=" + Date.now());
    }

  return (
    <div>
        <Button change={change}></Button>
        <hr />
        <Image image={image}/>
    </div>
  )
}
