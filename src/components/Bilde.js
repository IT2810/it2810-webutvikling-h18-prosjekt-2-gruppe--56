import React, { Component } from 'react';
import './Bilde.css';
import ReactSVG from 'react-svg-inline'

class Bilde extends Component {
    render() {
        console.log(this.props.image);
    	return (
			<div className = "Bilde">
                {this.props.image}
			</div>
    	);
    }
}

export default Bilde;
