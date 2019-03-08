import React from 'react';


const Weather = (props) => {
    return (
        <div>
            {/* These props access the <Weather /> on App.js and this.state."INSERT" */}
            {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
            {/* {props.cTemp && <p>Temperature: {props.cTemp}</p>} */}
            {props.fTemp && <p>Temperature: {props.fTemp}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions:  {props.description}</p>}
            {props.wind && <p>Wind Speed:  {props.wind}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;
