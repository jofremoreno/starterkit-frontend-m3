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
    const result = (temp - 273.15).toFixed(1) ;
    return `${result}Cº`;
  };

  componentDidMount() {
    this.getWeatherName('Madrid');
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
  }

  render() {
  
    
    return (
      <div>
        <h1>El tiempo</h1>
        {/* {this.state.res
          ? `tiempo: ${this.state.res.data.name} - ${this.cel(this.state.res.data.main.temp)}`
          : 'loading...'} */}
        {this.state.coords
          ? `tiempo coords: ${this.state.coords.data.name} - ${this.cel(this.state.coords.data.main.temp)}`
          : 'loading...'}

        {this.state.coords.data && 
        <div>{this.state.coords.data.weather.map((datos, info)=>{
          return <div key={`${info}`}>{`${datos.main} ${datos.description} ${datos.icon} `}</div>;
        })}</div>}
        {!this.state.coords.data && <div>Loading...</div>}
        
        
      </div>
    );
  }
}

export default Geolocation;
