/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import ApiWeather from '../ApiWeather';
import NavBar from './NavBar';
import ChromaticVar from './ChromaticVar';

import './geolocation.css';
import './backgroundcolor.css';
import './navbar.css';

class Geolocation extends Component {
  state = {
    res: false,
    coords: false,
    lg: false,
    lt: false,
  };

  getWeatherName = async city => {
    const result = await ApiWeather.getCityName(city);
    this.setState({
      res: result,
    });
  };

  getWeatherCoords = async () => {
    const { lt, lg } = this.state;
    const result = await ApiWeather.getByCoords(lt, lg);
    this.setState({
      coords: result,
    });
  };

  showPosition(position) {
    this.setState(
      {
        lg: position.coords.longitude,
        lt: position.coords.latitude,
      },
      this.getWeatherCoords,
    );
  }

  cel = (temp, cel) => {
    const result = (temp - 273.15).toFixed(1);
    return !cel ? `${result}Cº` : parseInt(result, 0);
  };

  getBackground = () => {
    if (this.state.coords) {
      const { temp } = this.state.coords.data.main;
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

  componentDidMount() {
    // this.getWeatherName('Madrid');
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }

  render() {
    return (
      <div id="background" className={this.getBackground()}>
        <h1>Weathever</h1>
        <div className="geolocation-data">
          {this.state.coords
            ? `${this.state.coords.data.name} ${this.cel(this.state.coords.data.main.temp)}`
            : 'loading...'}
          {this.state.coords.data && (
            <div>
              <div>
                <img
                  className="weather-icons"
                  src={`./img/${this.state.coords.data.weather[0].icon}.svg`}
                  alt="weather"
                />
              </div>
              {this.state.coords.data.weather.map((datos, info) => {
                return <div key={`${info}`}>{`${datos.main} `}</div>;
                // ${datos.description} ${datos.icon}
              })}
            </div>
          )}
          {!this.state.coords.data && <div>Loading...</div>}
        </div>
        <ChromaticVar></ChromaticVar>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Geolocation;
