import React from 'react';
import Geolocate from './components/geoLocate';
import Toggle from './components/Toggle';
import Titles from './components/titles';
import Or from './components/or';
import Form from './components/form';
import Weather from './components/weather';
import HomeDisplay from './components/homeDisplay'
import './App.css';

class App extends React.Component {
  // set initial state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    weatherIcon: undefined,
    error: undefined
  }

  // Open Weather API Call for Manual Entry
  getWeather = async (e) => {
    // Prevent default page refresh
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_key = "c58b5c9b0fcd8b7a57f63e10ed2628c5";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${api_key}`);

    const response = await api_call.json();
    console.log(response);

    if(city && country) {
      this.setState({
        fTemp: (response.main.temp * (9 / 5) - 459.67).toFixed(1),
        // cTemp: (response.main.temp - 273).toFixed(1),
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState ({
        error: "Please enter your city and state..."
      });
    }
  }

  // Open Weather API Call for Geolocation Entry
  getGeoWeather = async (e) => {
    // Prevent default page refresh
    e.preventDefault();

    const lat = e.target.elements.lat.value;
    const long = e.target.elements.long.value;

    const api_key = "c58b5c9b0fcd8b7a57f63e10ed2628c5";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${api_key}`);

    const response = await api_call.json();
    console.log(response);

    if(lat && long) {
      this.setState({
        fTemp: (response.main.temp * (9 / 5) - 459.67).toFixed(1),
        // cTemp: (response.main.temp - 273).toFixed(1),
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState ({
        error: "Please enter your city and state..."
      });
    }
    
  }

  

  render() {
    return (
      <div class="body">
        <Titles />
        <Weather
          fTemp={this.state.fTemp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          error={this.state.error} />
        <HomeDisplay />
      </div>
    )
  }
}

export default App;
