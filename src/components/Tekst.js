import React, { Component } from 'react';
import './Tekst.css';
import ReactSVG from 'react-svg-inline'

class Tekst extends Component {
    render() {
    	return (
			<div className = "Tekst">
				{this.props.tekst}
			</div>
    	);
    }
}

export default Tekst;
