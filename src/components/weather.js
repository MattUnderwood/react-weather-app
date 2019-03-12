import React from 'react';
import '../weatherDisplay.css'

const Weather = (props) => {
    var weatherIcon;
    if (props.main === 'Clear') {
        weatherIcon = <img className="weatherIcon" src='https://res.cloudinary.com/dls40gzte/image/upload/v1552409312/Weather%20App/day.svg' alt="Clear Sky"></img>;
    } else if (props.main  === 'Clouds') {
        weatherIcon = <img className="weatherIcon" src='https://res.cloudinary.com/dls40gzte/image/upload/v1552408469/Weather%20App/cloudy-day-1.svg' alt="Clouds"></img>;
    } else if (props.main === 'Drizzle') {
        weatherIcon = <img className="weatherIcon" src='https://res.cloudinary.com/dls40gzte/image/upload/v1552417096/Weather%20App/rainy-4.svg' alt="Drizzle"></img>;
    } else if (props.main === 'Rain') {
        weatherIcon = <img className="weatherIcon" src='https://res.cloudinary.com/dls40gzte/image/upload/v1552417566/Weather%20App/rainy-6.svg' alt="Rain"></img>;
    } else if (props.main === 'Thunderstorm') {
        weatherIcon = <img className="weatherIcon" src='https://res.cloudinary.com/dls40gzte/image/upload/v1552415927/Weather%20App/thunder.svg' alt="Thunderstorm"></img>;
    } else if (props.main === 'Snow') {
        weatherIcon = <img className="weatherIcon" src='https://res.cloudinary.com/dls40gzte/image/upload/v1552417566/Weather%20App/snowy-5.svg' alt="Snowy"></img>;
    } else if (props.main === 'Atmosphere') {
    }
    return (
        <div className="weatherDisplay">
            {/* These props access the <Weather /> on App.js and this.state."INSERT" */}
            {props.country && props.city && <p className="yourCity"> {props.city}, {props.country}</p>}
            {/* {props.cTemp && <p>Temperature: {props.cTemp}</p>} */}
            <ul className="weatherConditionList">
                {weatherIcon}
                {props.description && <li> {props.description}</li>}
                {props.fTemp && <li> {props.fTemp} °F</li>}
                {props.humidity && <li> {props.humidity}% Humidity</li>}
                {props.wind && <li> {props.wind} MPH</li>}
                {props.error && <li>{props.error}</li>}
            </ul>
        </div>
    )
}

export default Weather;
