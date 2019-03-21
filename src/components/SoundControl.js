import React, { Component } from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { progressBarData } from '../actions/stationsData';

class SoundControl extends Component {

  handleSongLoading = e =>{
    if (e.buffered[0]) {
      let buffered = e.buffered[0].end / 53
      if(buffered <= 106) {
        this.props.progressBarData(buffered)
      }
    }
  }

  render() {
      const { control, stream, volume } = this.props
      return (
      <div>
        <Sound
          url={stream}
          playStatus={control}
          volume={volume}
          onLoading={this.handleSongLoading}
        />
      </div>
    );
  }
}

const putStateToProps = state => {
  return{
    volume: state.controlsDataState.volume,
  }
};

const putActionToProps = {
  progressBarData,
};

export default connect(
  putStateToProps,
  putActionToProps
)(SoundControl);