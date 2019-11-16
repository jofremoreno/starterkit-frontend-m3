/* eslint-disable no-nested-ternary */
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

  cel = (temp, cel) => {
    const result = (temp - 273.15).toFixed(1);
    return !cel ? `${result}Cº` : parseInt(result, 0);
  };

  getBackground = () => {
    if (this.state.result) {
      const { temp } = this.state.result.main;
      const formatTemp = this.cel(temp, true);
      console.log('background', this.cel(temp, true));

      return formatTemp > 35
        ? 'background-color-red'
        : formatTemp > 30
        ? 'background-color-orange'
        : formatTemp > 25
        ? 'background-color-yellow'
        : formatTemp > 20
        ? 'background-color-green'
        : formatTemp > 15
        ? 'background-color-aqua'
        : formatTemp > 10
        ? 'background-color-blue'
        : formatTemp > 5
        ? 'background-color-violet'
        : formatTemp > 0
        ? 'background-color-pink'
        : 'background-color-white';
    }
    return 'background-color-default';
  };

  render() {
    const { result } = this.state;
    return (
      <div className={`container ${this.getBackground()}`}>
        <h1>Search</h1>
        <form className="search-form" onSubmit={this.searchCity}>
          <input name="search" type="text" onChange={this.handleSearch} placeholder="City here"></input>
        </form>
        {!result ? (
          <div>No hay elementos que mostrar</div>
        ) : result !== 'error' ? (
          <div>
            resultados {result.name} {this.cel(result.main.temp)}
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
