import React, { Component } from 'react';
import './Art.css'
import Bilde from './Bilde.js'
import Tekst from './Tekst.js'

class Art extends Component {
    render() {
        console.log(this.props.text);
        return (
            <div className="Art-container">
				<Bilde image = {this.props.image}/>
				<Tekst text = {this.props.text} />
            </div>
        );
    }
}
export default Art;
