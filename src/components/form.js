import React from 'react';
import '../form.css'

class Form extends React.Component {
    render(){
        return (
            <form onSubmit={this.props.loadWeather}>
                <input className="input" type="text" name="city" placeholder="City..." />
                <input className="input" type="text" name="country" placeholder="Country..." />
                <br />
                <button className="btn">Show Weather</button>
            </form>
        )
    }
}

export default Form;