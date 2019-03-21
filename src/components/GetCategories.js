import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { categoriesData } from "../actions/categoriesData";
import Category from '../containers/category'
import '../main.scss';

class GetCtaegories extends Component {

  componentDidMount(){
    this.props.categoriesData();
  }


  render() {
    const { categories } = this.props
    return (
      <div>
        <div className='category-container'>
          {categories.map((category) =>
            <Category key={category.id} category={category} />
          )}
        </div>
      </div>
    );
  }
}
const putStateToProps = state => {
  console.log(state.categoriesState)
  return {
    categories: state.categoriesState.categoriesData
  };
};

const putActionToProps = {
  categoriesData
};

export default withRouter(
  connect(
    putStateToProps,
    putActionToProps
  )(GetCtaegories)
);