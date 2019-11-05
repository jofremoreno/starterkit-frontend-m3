import React, { Component } from 'react';
import ApiWeather from '../ApiWeather';


class Geolocation extends Component {
  state = {
    res: false,
    lg: false,
    lt: false,
  };

  load = async () => {
    const result = await ApiWeather.getCityName('london');
    this.setState({
      res: result,
    });
  };

  showPosition(position) {
    this.setState({
      lg: position.coords.longitude,
      lt: position.coords.latitude,
    });
  }

  componentDidMount() {
    this.load();
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }

  render() {
    console.log(this.state.res);
    return (
      <div>
        <h1>El tiempo</h1>
        {this.state.res ? `tiempo: ${this.state.res.data.name} - ${this.state.res.data.main.temp}` : 'loading...'}
      </div>
    );
  }
}

export default Geolocation;
