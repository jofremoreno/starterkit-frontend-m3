import axios from 'axios';

class ApiWeather {
  constructor() {
    this.weather = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5',
    });
  }

  getCityName(name) {
    return this.weather.get(`/weather?q=${name}&appid=76c66cb9ac84b481fdee2ba8c655b8c5`);
  }

  getByCoords(lat, lon) {
    return this.weather.get(`/weather?lat=${lat}&lon=${lon}&appid=76c66cb9ac84b481fdee2ba8c655b8c5`);
  }
}

export default new ApiWeather();
