import React, { Component } from 'react';
import Sound from 'react-sound';

class SoundControl extends Component {

  handleSongLoading = (e) =>{
    console.log(e.buffered[0])
  }

  handleSongPlaying = (e) => {
    console.log(e.duration)
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

export default SoundControl;