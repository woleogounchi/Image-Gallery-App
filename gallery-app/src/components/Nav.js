import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  performSearch = e => this.props.performSearch(e.target.innerText);

  render() {
    return(
      <div className="main-nav">
        <ul>
          <li><NavLink exact to="/search/cats" onClick={this.performSearch}>Cats</NavLink></li>
          <li><NavLink to="/search/dogs" onClick={this.performSearch}>Dogs</NavLink></li>
          <li><NavLink to="/search/dolphins" onClick={this.performSearch}>dolphins</NavLink></li>
        </ul>
      </div>
    );
  }    
}

export default Nav;
