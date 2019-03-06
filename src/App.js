import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SoundControl from './SoundControl';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      controlStatus: 'STOPPED',
    };
  }
  componentDidMount(){
    const url = 'http://api.dirble.com/v2/'

    const headers = {
      'Accept': "application/json, text/plain, */*"
    }
    
    const params = {
      'token': 'e248cfcccd1e56711c878a2199',
    }
    const instance = axios.create({
      baseURL: url,
      timeout: 1000,
      headers: headers,
      params: params,
    });

    instance
      .get('category/2/stations')
      .then((response) => {
        console.log(response);
       
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleClick = (status) => {
    this.setState({
      controlStatus: status
    })
  }
    
  render() {
    const playStatus = ['PLAYING', 'STOPPED', 'PAUSED'];
    return (
      <div className="App">
      {playStatus.map((status) => 
        <button key={status} onClick={this.handleClick.bind(this, status)}>{status}</button>
      )}
        <SoundControl control={this.state.controlStatus}/>
      </div>
    );
  }
}

export default App;
