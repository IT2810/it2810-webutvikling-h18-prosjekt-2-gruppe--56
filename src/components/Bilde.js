import React, { Component } from 'react';
import './Bilde.css';
import ReactSVG from 'react-svg-inline'

class Bilde extends Component {
    render() {
    	return (
			<div className = "Bilde" dangerouslySetInnerHTML={{ __html: this.props.image }}>
			</div>
    	);
    }
}

export default Bilde;
