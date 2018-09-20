import React, { Component } from 'react';
import './Tittel.css';



class Tittel extends Component {
    render() {
        return (
            <div className="Tittel">
				<h1>{this.props.artName}</h1>
            </div>
        );
    }
}

export default Tittel;
