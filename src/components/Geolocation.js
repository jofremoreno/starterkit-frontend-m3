import React, { Component } from 'react';
import ApiWeather from '../ApiWeather';

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
    const result = (temp - 32) * 5/9;
    return `hola Jofre -> ${result}Cº`;
  };

  componentDidMount() {
    this.getWeatherName('Madrid');
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }

  render() {
    console.log(this.state.coords);
    return (
      <div>
        <h1>El tiempo</h1>
        {this.state.res
          ? `tiempo: ${this.state.res.data.name} - ${this.cel(this.state.res.data.main.temp)}`
          : 'loading...'}
        {this.state.coords
          ? `tiempo coords: ${this.state.coords.data.name} - ${this.cel(this.state.coords.data.main.temp)}`
          : 'loading...'}
      </div>
    );
  }
}

export default Geolocation;
