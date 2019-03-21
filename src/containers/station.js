import React, { Component } from 'react';
import { connect } from "react-redux";
import { stationData } from "../actions/stationsData";
import  radio from '../icon/radio.png';

class Station extends Component {
  
  handleClick = data => {
    this.props.stationData(data);
  }
  render() {
    const { stations } = this.props
    console.log(stations)
    return (
      <div>
        {
          stations? stations.map((station) => {
            return (
              <div 
                key={station.id}
                className='station'
                onClick={this.handleClick.bind(this, station)}>
                <h5>{station.name}</h5>
                <img src={ station.image.thumb.url ? station.image.thumb.url : radio} alt={station.name}/>
              </div>
            );
          }) : false }
      </div>
    );
  }
}

const putStateToProps = state => {
  return {
    stations: state.stationsState.stationsData
  };
};

const putActionToProps = {
  stationData
};

export default connect(putStateToProps, putActionToProps)(Station);