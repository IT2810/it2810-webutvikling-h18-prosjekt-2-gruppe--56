import React, { Component } from 'react';
import './Bilde.css';
import ReactSVG from 'react-svg-inline'

class Bilde extends Component {
    render() {
    	return (
			<div className = "Bilde">
                { this.props ? (<ReactSVG svg={this.props.svg}/>) : false}
			</div>
    	);
    }
}

export default Bilde;
