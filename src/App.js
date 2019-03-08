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
