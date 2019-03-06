import React, { Component } from 'react';
import Sound from 'react-sound';

class SoundControl extends Component {
  render() {
    console.log(this.props.control)
    return (
      <div>
        <Sound
          url={"http://stream.laut.fm/gamersone"}
          playStatus={this.props.control}
        />
      </div>
    );
  }
}

export default SoundControl;