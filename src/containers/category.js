import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../main.scss';

class Category extends Component {
  handleClick = id => {
    this.props.history.push(/stations/+id)
  }
  render() {
    const {title, id} = this.props
    return (
      <div onClick={this.handleClick.bind(this, id)} className='category'>
        <h3>{title}</h3>
      </div>
    );
  }
}

export default withRouter(Category);