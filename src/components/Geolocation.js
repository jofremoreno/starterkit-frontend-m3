import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ApiWeather from '../ApiWeather';
import NavBar from './NavBar';
import './geolocation.css';
import './navbar.css'

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

  cel = temp => {
    const result = (temp - 273.15).toFixed(1) ;
    return `${result}Cº`;
  };

  componentDidMount() {
    this.getWeatherName('Madrid');
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }

  render() {
    
    return (
      <div className="geolocation-main">
        <h1>Weathever</h1>
        {/* {this.state.res
          ? `tiempo: ${this.state.res.data.name} - ${this.cel(this.state.res.data.main.temp)}`
          : 'loading...'} */}
        {this.state.coords
          ? `${this.state.coords.data.name} - ${this.cel(this.state.coords.data.main.temp)}`
          : 'loading...'}

        {this.state.coords.data && (
          <div>
            {this.state.coords.data.weather.map((datos, info) => {
              return <div key={`${info}`}>{`${datos.main} ${datos.description} ${datos.icon} `}</div>;
            })}
          </div>
        )}
        {!this.state.coords.data && <div>Loading...</div>}
          <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Geolocation;
