import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Station from '../containers/station';
import { stationsData } from '../actions/stationsData';

class GetStations extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.stationsData(id)
  }

  render() {
    const { stations } = this.props
    return (
      <div className='stations'>
          <Station stations={stations}/>
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
  stationsData
};

export default withRouter(
  connect(
    putStateToProps,
    putActionToProps
  )(GetStations)
);