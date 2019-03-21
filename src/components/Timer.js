import React, { Component } from 'react';
import TimeFormat from 'hh-mm-ss';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: 0,
    };
  }

  timeStap = () => {
    this.setState({
      time: this.state.time + 1
    })
  }

  componentWillReceiveProps(props){
    clearInterval(this.interval)
    if (props.controlStatus === 'PLAYING') {
      this.setState({
        time: 0
      })
      this.interval =  setInterval(() => {
        this.timeStap();
      }, 1000);
    } 
    else {
      clearInterval(this.interval)
    }
  }

  render() {
    let {time} = this.state
    return (
      <div className='timer'>
        {TimeFormat.fromS(time, 'hh:mm:ss')}
      </div>
    );
  }
}

export default Timer