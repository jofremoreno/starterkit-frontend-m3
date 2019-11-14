import React, { Component } from 'react';
import ApiWeather from '../ApiWeather';
import './search.css';
import NavBar from './NavBar';
import './navbar.css';

class Search extends Component {
  state = {
    search: '',
    result: false,
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value,
    });
  };

  searchCity = async event => {
    event.preventDefault();
    try {
      const result = await ApiWeather.getCityName(this.state.search);
      console.log(result);
      this.setState({
        result: result.data,
      });
    } catch (err) {
      this.setState({
        result: 'error',
      });
    }
  };

  render() {
    const { result } = this.state;
    return (
      <div className="search-main">
        <h1>Search</h1>
        <form onSubmit={this.searchCity}>
          <input name="search" type="text" onChange={this.handleSearch} placeholder="City here"></input>
        </form>
        {!result ? (
          <div>No hay elementos que mostrar</div>
        ) : result !== 'error' ? (
          <div>
            resultados {result.name} - {result.main.temp}
          </div>
        ) : (
          <div>zona no encontrada</div>
        )}
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Search;
