import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather.component';

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_key = '3f0f7b99268287f160ea5e4b852dafc8';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`)

    // Convert data into JSON format
    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country
    })
  }
  render() {
    return (
      <div className="App">
      <Weather city={this.state.city} country={this.state.country} />
    </div>
    );
  }
}

export default App;
