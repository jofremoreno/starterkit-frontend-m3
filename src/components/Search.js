import React, { Component } from 'react';
import ApiWeather from '../ApiWeather';
import './search.css'
import NavBar from './NavBar';
import './navbar.css';

class Search extends Component {
  handleSearch = event => {
    const { handleSearch } = this.props;
    handleSearch(ApiWeather.getCityName);
  };

  render() {
    return (
      <div className="search-main">
        <h1>Search</h1>
        <input name="search" type="text" onChange={this.handleSearch}></input>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Search;