import React from 'react';
import { geolocated } from 'react-geolocated';

class GeoLocate extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div>Geolocation is not enabled</div>
                : this.props.coords
                ? <form onSubmit = {this.props.loadIt} >
                        <input  name="lat" defaultValue={this.props.coords.latitude} />
                        <input  name="long" defaultValue={this.props.coords.longitude} />
                    <button>Show Weather</button>
                </form >
                   : <div>Getting the location data&hellip; </div>;
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GeoLocate);