import React, { Component } from 'react'
import './Slider.css'

export default class Slider extends Component {

    // 声明State
    setState(state, callback) {
        super.setState(state, callback);
    }

    state = {
        num: 1,
        images: [
            '/images/124121151.jpg',
            '/images/1512521511.jpg',
            '/images/aaefjwaiofjwaio.jpg',
            '/images/afwefawefwaeiofaw.jpg',
            '/images/qji23oj51oo5j125.jpg'
        ],
        index: 0
    }

    // 声明事件方法
    next = () => {
        // 获取dangqian
        // let {num} = this.state;
        // if (num >= 5){
        //     num = 1;
        // }else {
        //     num += 1
        // }
        // this.setState({
        //     num: num
        // })

        // 数组使用
        let {index, images} = this.state;
        if (index >= images.length - 1){
            index = 0; // 重置
        }else {
            index += 1;
        }
        this.setState({
            index: index
        })
    }

    prev = () => {
        // 获取dangqian
        // let {num} = this.state;
        // if (num <= 1){
        //     num = 5;
        // }else {
        //     num -= 1
        // }
        // this.setState({
        //     num: num
        // })
        // 数组
        let {index, images} = this.state;
        if (index <= 0){
            index = images.length - 1; // 重置
        }
        else {
            index -= 1;
        }
        this.setState({
            index: index
        })
    }
    render() {
        let {index, images} = this.state;
    return (
      <div className='slider-wrapper'>
        <img width="100%" src={images[index]} alt="" />
        <div className="prev btn" onClick={this.next}>&lt;</div>
        <div className='next btn' onClick={this.prev}>&gt;</div>
      </div>
    )
  }
}
