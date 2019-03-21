import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stationHistory } from '../actions/stationsData';
import HistorySongs from '../containers/historySongs';

class StationHistory extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: 'is-close',
    };
  }

  handleGetHistory = toggle => {
    const {stationId} = this.props
    if(toggle === 'is-close') {
      this.props.stationHistory(stationId);
      this.setState({
        toggle: 'is-open'
      });
    } 
    else {
      this.setState({
        toggle: 'is-close'
      });
    }
  }

  handleSelectSong

  render() {
    const {toggle} = this.state
    const {stationHistoryData} = this.props
    console.log(stationHistoryData)
    return (
      <div>
        <div 
          className={`songs-items ${toggle}`}
        >
          {stationHistoryData.map((song, i)=> {
            return(
              <HistorySongs  key={i} song={song}  />
              ); 
          })}
        </div>
        <div className='menu-bar__history'  onClick={this.handleGetHistory.bind(this, toggle)}>
          Station History
        </div>
      </div>
    );
  }
}

const putStateToProps = state => {
  return {
    stationHistoryData: state.stationsState.stationHistoryData
  };
};

const putActionToProps = {
  stationHistory,
};

export default
  connect(
    putStateToProps,
    putActionToProps
  )(StationHistory);