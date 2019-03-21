import React, { Component } from 'react';
import { connect } from 'react-redux';
import  radio from '../icon/radio.png';
import _ from 'lodash';
import DateFormat from 'dateformat';
import { spotifyTrack } from '../actions/stationsData';

class HistorySongs extends Component {

  handleSelectSong = data => {
    if(  _.mapValues(data).urls.spotify.slice(14) !== null || data) {
      const spotifyId = _.mapValues(data).urls.spotify.slice(14)
      this.props.spotifyTrack(spotifyId)
    }
  }

  render() {
    const {name, title, info, date } = this.props.song
    return (
      <div className='song-item' onClick={this.handleSelectSong.bind(this, info)} >
        <img src={info ? _.mapValues(info.image).thumb.url : radio} alt={title}/>
        <div className='song-item__title'>
          <h4>{name}</h4>
          <h5>{title}</h5>
          <p>{DateFormat(date, 'ddd mmm dd yyyy HH:MM:ss')}</p>
        </div>
      </div>
    );
  }
}

const putStateToProps = state => {
 return state
};

const putActionToProps = {
  spotifyTrack
};

export default
  connect(
    putStateToProps,
    putActionToProps
  )(HistorySongs);