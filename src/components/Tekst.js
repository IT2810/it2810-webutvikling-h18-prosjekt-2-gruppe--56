import React, { Component } from 'react';
import './Tekst.css';

class Tekst extends Component {
    render() {
    	return (
			<div className = "Tekstboks">
				<p>{this.props.tekst}</p>
			</div>
    	);
    }
}

export default Tekst;
