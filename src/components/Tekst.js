import React, { Component } from 'react';
import './Tekst.css';

class Tekst extends Component {
    render() {
    	return (
			<div className = "Tekstboks">
				<p>{this.props.text}</p>
			</div>
    	);
    }
}

export default Tekst;
