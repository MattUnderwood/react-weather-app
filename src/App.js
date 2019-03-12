import React from 'react';
import Titles from './components/titles';
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
    main: undefined,
    error: undefined,
  }

  render() {
    return (
      <div className="body">
        <Titles />
        <HomeDisplay />
      </div>
    )
  }
}

export default App;
