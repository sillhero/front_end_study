import React, { Component } from 'react'
// import moment from 'moment';

export default class EleClock extends Component {

  state = {
    timeStr: ''
  }

  render() {
    return (
      <div style={{border: 'solid 1px #666', padding: '20px', display: 'inline-block'}}>
        {this.state.timeStr}
      </div>
    )
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      let date = new Date();
      let timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.setState({
        timeStr: timeStr
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount will uninstall the timer');
    clearInterval(this.timer);
  }
}
