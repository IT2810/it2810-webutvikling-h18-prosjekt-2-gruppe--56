import React, { Component } from 'react';
import './Artpane.css';
import Tabsbar from './Tabsbar.js';
import Tittel from './Tittel.js';
import Art from './Art.js';

class Artpane extends Component {
    render() {
        return (
            <div className="Artpane">
				<Tittel artName = "Her skal kunst-tittelen!!!" />
				<Tabsbar />
				<Art />
            </div>
        );
    }
}

export default Artpane;
