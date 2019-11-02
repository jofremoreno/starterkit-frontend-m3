import axios from 'axios';

class ApiWeather {
  constructor() {
    this.weather = axios.create({
      baseURL: 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=process.env.API_WEATHER_KEY',
    });
  }
  async getGeolocationCity(id) {
    console.log(id);
    const { data: beer } = await this.weather.get(`/${id}`);
    console.log(beer);
    return beer;
  }
}

export default ApiWeather;
