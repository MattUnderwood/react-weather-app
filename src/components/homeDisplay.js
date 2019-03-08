import React, { Component } from 'react';
import Form from './form';
import GeoLocate from './geoLocate';
import Weather from './weather';
import Or from './or';

export default class homeDisplay extends Component {
    constructor(props) {
        super(props);
        this.handleFormClick = this.handleFormClick.bind(this);
        this.handleGeoClick = this.handleGeoClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = { 
            // For button and display logic
            homeView: true, 
            formView: false, 
            geoView: false,
            // For weather results
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            wind: undefined,
            weatherIcon: undefined,
            error: undefined
        };
    }

    handleFormClick() {
        this.setState({ homeView: false, formView: true, geoView: false });
    }

    handleGeoClick() {
        this.setState({ homeView: false, formView: false, geoView: true });
    }

    handleResetClick() {
        this.setState({
            homeView: true, 
            formView: false, 
            geoView: false, 
            temperature: undefined,
            fTemp: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            wind: undefined,
            weatherIcon: undefined,
            error: undefined 
        });
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

        if (city && country) {
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
            this.setState({
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

        if (lat && long) {
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
            this.setState({
                error: "Please enter your city and state..."
            });
        }
    }

    render() {
        const homeView = this.state.homeView;
        const formView = this.state.formView;
        const geoView = this.state.geoView;
        let formButton;
        let or;
        let geoButton;
        let form;
        let geo;
        let reset;

        if (homeView) {
            formButton = <button onClick={this.handleFormClick}>Enter Your City</button>
            or = <p>OR</p>
            geoButton = <button onClick={this.handleGeoClick}>Find Your Location</button>
        } else if (formView) {
            form = <Form loadWeather={this.getWeather} />;
            reset = <button onClick={this.handleResetClick}>Reset</button>
        } else if (geoView) {
            geo = <GeoLocate loadIt={this.getGeoWeather} />;
            reset = <button onClick={this.handleResetClick}>Reset</button>
        }

        return (
            <div>
                <Weather
                    fTemp={this.state.fTemp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    wind={this.state.wind}
                    error={this.state.error} />
                {formButton}
                {form}
                {or}
                {geoButton}
                {geo}
                {reset}
            </div>
        );
    }
}
