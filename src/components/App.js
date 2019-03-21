import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from 'lodash';
import { stationData } from "../actions/stationsData";
import SoundControl from './SoundControl';
import Timer from './Timer';
import ProgressBar from '../containers/progressBar';
import Volume from '../components/Volume';
import StationHistory from '../components/StationHistory'
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
      volumeSet: 'control__volume--unmute',

    };
  }

  componentWillReceiveProps(props) {
    const station = props.station 
    if (station.streams !== undefined) {
      this.setState({
        stream_url: _.mapValues(station.streams)[0].stream,
        controlStatus: 'PLAYING',
        controlPlay: 'control__paused',
        bitrate: 0,
      })
    }
  }

  handlePlay = e => {
    if (this.state.stream_url !== '' ) {
      const controlPlay = e.target.className
      if (controlPlay === 'control__paused' ) {
        this.setState({
          controlStatus: 'PAUSED',
          controlPlay: 'control__playing'
        })
      } 
      else {
        this.setState({
          controlStatus: 'PLAYING',
          controlPlay: 'control__paused'
        })
      }
    }
  };

  handleSelect = (stream, index) => {
    if (this.state.stream_url !== stream) {
      this.setState({
        stream_url: stream,
        controlStatus: 'PLAYING',
        bitrate: index
      })
    }
  }

  checkimage = station => {
    const image = _.mapValues(station.image)['url']
    if ( image === null || undefined ) {
      return false;
    } 
    else {
      return image;
    }
  } 
    
  render() {
    const { station } = this.props
    const { controlStatus, 
            stream_url, 
            bitrate, 
            controlPlay, } = this.state
    const image = this.checkimage(station);
    return (
      <div>
        <div className='control-container'>
          <div className = 'menu-bar'> 
            <Link to='/categories'>Categories</Link>
            <StationHistory stationId={station.id} />
          </div>
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
                      style={bitrate === i ? {'color': '#033cf4'} : null} 
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
              <Timer 
                controlStatus={controlStatus} 
              />
              <ProgressBar />
              <Volume />
              <SoundControl 
                control={controlStatus} 
                stream={stream_url} 
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
    station: state.stationsState.stationData, 
  };
};

const putActionToProps = {
  stationData
};

export default withRouter(
  connect(
    putStateToProps,
    putActionToProps
  )(App)
);
