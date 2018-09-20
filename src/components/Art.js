import React, { Component } from 'react';
import './Art.css'
import Bilde from './Bilde.js'
import Tekst from './Tekst.js'

class Art extends Component {
    render() {
        return (
            <div className="Art-container">
				<Bilde/>
				<Tekst tekst = "det var en gang en mann." />
            </div>
        );
    }
}
export default Art;
