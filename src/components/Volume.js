import React, { Component } from 'react';
import { connect } from "react-redux";
import { volume } from '../actions/controlsData';

class Volume extends Component {
  constructor(props){
    super(props);
    this.state = {
      volumeSet: 'control__volume--unmute'
    }
  }

  handleChange = e => {
      this.props.volume(parseInt(e.target.value))
  }

  handleVolumeSet = e => {
    const vulemuStage = e.target.className
    if (vulemuStage === 'control__volume--unmute' ) {
      this.setState({ 
        volumeSet: 'control__volume--mute',
      })
      this.props.volume(0);
    } 
    else {
      this.setState({ 
        volumeSet: 'control__volume--unmute',
      })
      this.props.volume(30);
    }
  }

  render() {
    const { volumeSet } = this.state
    const { value } = this.props
    return (
      <div 
        style={volumeSet !== 'control__volume--mute' ? {'opacity': '1'} : {'opacity': '0.5'}}
        className='control__volume'
      > 
        <div
          onClick={this.handleVolumeSet.bind(this)}
          className={volumeSet}>
        </div>
        <input 
          type='range'
          className='control__volume--input'
          onChange={this.handleChange.bind(this)}
          value={value}
        />
    </div>
    );
  }
}

const putStateToProps = state => {
  return {
    value: state.controlsDataState.volume,
  };
};

const putActionToProps = {
  volume,
};

export default
  connect(
    putStateToProps,
    putActionToProps
  )(Volume);