import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/PhotoContainer';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'cats') => {
    axios.get(`API LINK GOES HERE`)
      .then(response => {
        this.setState({
          photos: response.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    console.log(this.state.photos);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gallery App</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoContainer data={this.state.photos} />
          }          
        </div>
      </div>
    );
  }
}
