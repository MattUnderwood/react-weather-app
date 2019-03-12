import React from 'react';
import { geolocated } from 'react-geolocated';
import '../geo.css';

class GeoLocate extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable
            ? <div className="error">Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div className="error">Geolocation is not enabled</div>
                : this.props.coords
                    // ? function trigger() {
                    //     const lat = this.props.coords.latitude
                    //     const long = this.props.coords.longitude
                    // }
    
              ?  < form  onSubmit = { this.props.loadIt }>
                        <input className="input" name="lat" defaultValue={this.props.coords.latitude} />
                        <input className="input" name="long" defaultValue={this.props.coords.longitude} />
                    <button className="btn">Show Weather</button>
                </form >
                   : <div className="error">Getting the location data&hellip; </div>;
                
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GeoLocate);