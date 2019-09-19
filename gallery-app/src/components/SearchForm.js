import React, { Component } from 'react';
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';

class SearchForm extends Component {
  // Set the search bar innerText as empty at the beginning 
  state = {
    searchText: ''
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  // Function that submits the query entered in the search box and the adds the query string into the url path 
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    this.props.history.push({pathname: `/search/${this.query.value}`});
    e.currentTarget.reset();
  }

  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
          onChange={this.onSearchChange}
          name="search" 
          ref={(input) => this.query = input}
          placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
      
      );
  }
}

export default withRouter(SearchForm);