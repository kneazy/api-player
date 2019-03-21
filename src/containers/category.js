import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../main.scss';

class Category extends Component {
  handleClick = id => {
    this.props.history.push(/stations/+id)
  }
  render() {
    const {title, id, description} = this.props.category
    return (
      <div onClick={this.handleClick.bind(this, id)} className='category'>
        <h3>{id}. {title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default withRouter(Category);