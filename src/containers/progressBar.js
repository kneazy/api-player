import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../main.scss';

class ProgressBar extends Component {
  render() {
    const { progress } = this.props
    const style = {
      'width': progress+'%'
    }

    return (
      <div>
        <div className='progressBar'>
          <div className='progressBar__percentage' style={style}></div>
        </div>
      </div>
    );
  }
}

const putStateToProps = state => {
  return {
    progress: state.stationsState.progressData
  };
};

const putActionToProps = {
};

export default connect(
  putStateToProps,
  putActionToProps
)(ProgressBar);