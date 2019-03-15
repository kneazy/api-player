import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from 'lodash';
import { stationData, songHistory } from "../actions/stationsData";
import SoundControl from './SoundControl';
import  radio from '../icon/radio.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      controlStatus: 'PAUSED',
      controlPlay: 'control__playing',
      stream_url: '',
      bitrate: 0,
      volume: 30,
      volumeSet: 'control__volume--unmute'
    };
  }

  componentWillReceiveProps(props) {
    const station = props.station 
    if (station.streams !== undefined) {
      this.setState({
        stream_url: _.mapValues(station.streams)[0].stream,
        controlStatus: 'PLAYING',
        bitrate: 0,
      })
      console.log(_.mapValues(station.streams)[0])
    }
  }
  

  handlePlay = (e) => {
    if (this.state.stream_url !== '' ) {
      const controlPlay = e.target.className
      if (controlPlay === 'control__playing' ) {
        this.setState({
          controlStatus: 'PAUSED',
          controlPlay: 'control__paused'
        })
      } 
      else {
        this.setState({
          controlStatus: 'PLAYING',
          controlPlay: 'control__playing'
        })
      }
    }
  };

  handleSelect = (stream, id) => {
    if (this.state.stream_url !== stream) {
      this.setState({
        stream_url: stream,
        controlStatus: 'PLAYING',
        bitrate: id
      })
    }
  }

  handleChange = e => {
    this.setState({
      volume: parseInt(e.target.value)
    });
  }

  handleVolumeSet = (e) => {
    const vulemuStage = e.target.className
    if (vulemuStage === 'control__volume--unmute' ) {
      this.setState({ 
        volumeSet: 'control__volume--mute',
        volume: 0
      })
    } 
    else {
      this.setState({ 
        volumeSet: 'control__volume--unmute',
        volume: 30
      })
    }
  }

  checkimage = (station) => {
    const image = _.mapValues(station.image)['url']
    if ( image === null || undefined ) {
      return false;
    } 
    else {
        return image;
    }
  } 
    
  render() {
    const {station} = this.props
    const {controlStatus, stream_url, volume, volumeSet, bitrate, controlPlay} = this.state
    const image = this.checkimage(station);
    return (
      <div>
        <Link to='/categories'>Categories</Link>
        <div className='control-container'>
          <div className='station-selected'>
            <img src={image ? station.image.thumb.url : radio } alt={station.name}/>
            <div className='station-selected__info'>
              <h4>{station.name}</h4>
              <div  className='station-selected__bitrate'>
                { station.streams ? station.streams.map((stream, i) => {
                  return (
                    <div 
                      key={i}
                      className='station-selected__bitrate-items' 
                      onClick={this.handleSelect.bind(this, stream.stream, i)}
                      style={bitrate === i? {'color': '#033cf4'} : null } 
                      >{stream.content_type.slice(6)} {stream.bitrate}
                    </div>
                    );
                  }) : false
                }
              </div>
            </div>
            <div className='control'>
              <button
                className={controlPlay}
                onClick={this.handlePlay.bind(this)}>
              </button>
              <div 
                style={volumeSet !== 'control__volume--mute' ? {'opacity': '1'} : {'opacity': '0.5'}}
                className='control__volume'
              > 
                <div
                  onClick={this.handleVolumeSet.bind(this)}
                  className={volumeSet}></div>
                <input 
                  type='range'
                  className='control__volume--input'
                  onChange={this.handleChange.bind(this)}
                  value={volume}
                />
              </div>
              <SoundControl 
                control={controlStatus} 
                stream={stream_url} 
                volume={stream_url ? volume : null}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const putStateToProps = state => {
  return {
    station: state.stationsState.stationData
  };
};

const putActionToProps = {
  stationData,
  songHistory
};

export default withRouter(
  connect(
    putStateToProps,
    putActionToProps
  )(App)
);
