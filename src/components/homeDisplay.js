import React, { Component } from 'react';
import Form from './form';
import GeoLocate from './geoLocate';
import Or from './or';

export default class homeDisplay extends Component {
    constructor(props) {
        super(props);
        this.handleFormClick = this.handleFormClick.bind(this);
        this.handleGeoClick = this.handleGeoClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = { homeView: true, formView: false, geoView: false };
    }

    handleFormClick() {
        this.setState({ homeView: false, formView: true, geoView: false });
    }

    handleGeoClick() {
        this.setState({ homeView: false, formView: false, geoView: true });
    }

    handleResetClick() {
        this.setState({ homeView: true, formView: false, geoView: false });
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
            form = <Form onClick={this.handleFormClick} />;
            reset = <button onClick={this.handleResetClick}>Reset</button>
        } else if (geoView) {
            geo = <GeoLocate onClick={this.handleGeoClick} />;
            reset = <button onClick={this.handleResetClick}>Reset</button>
        }

        return (
            <div>
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
