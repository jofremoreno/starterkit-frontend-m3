import axios from 'axios';

class ApiWeather {
  constructor() {
    this.weather = axios.create({
      baseURL: 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=process.env.API_WEATHER_KEY',
    });
  }
  getBookById(id){
    return this.axios.get(`/books/${id}`)
      .then(({ data: book }) => book);
  }
}

export default ApiWeather;
