import React from 'react';
import { geolocated } from 'react-geolocated';
import '../geo.css';

class GeoLocate extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable
            ? <div className="message">Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div className="message">Geolocation is not enabled</div>
                : this.props.coords
              ?  < form  onSubmit = { this.props.loadIt }>
                        <p className="message">Your location was found!</p>
                        <input className="hide" name="lat" defaultValue={this.props.coords.latitude} />
                        <input className="hide" name="long" defaultValue={this.props.coords.longitude} />
                        <br />
                    <button className="btn margin">Click here to see your local weather</button>
                </form >
                   : <div className="message">Getting the location data&hellip; </div>;
                
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GeoLocate);