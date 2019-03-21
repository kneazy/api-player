import React, { Component } from 'react';
import _ from 'lodash';
import DateFormat from 'dateformat';

class HistorySongs extends Component {

  render() {
    const {name, title, info, date } = this.props.song
    return (
      <div className='song-item' >
        <iframe
          title="Spotify"
          className="song-item__spotify-player"
          src={`https://embed.spotify.com/?uri=${info?_.mapValues(info).urls.spotify:null}&view=list&theme=black`}
          width={'80px'}
          height={'80px'}
          frameBorder="0"
          allowtransparency="true"
        />
        <div className='song-item__title'>
          <h4>{name}</h4>
          <h5>{title}</h5>
          <p>{DateFormat(date, 'ddd mmm dd yyyy HH:MM:ss')}</p>
        </div>
      </div>
    );
  }
}

export default HistorySongs;