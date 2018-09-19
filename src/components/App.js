import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Category from './Category';
import Media from './Media';
import Tabsbar from './Tabsbar.js';
import Bilde from './Bilde.js';
import CategoryPane from './CategoryPane.js'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Tabsbar/>
                <CategoryPane/>
            </div>
        );
    }
}

export default App;
//Eksempel bruk av category og Media
/*
<Category text = "Katt"/>
<br></br>
<Media name = "picture" categories = {[{id:0, name:"Dyr"},{id:1 , name:"Biler"},{id:2, name:"Peperonice"}]}/>
*/

// Include  <Tabsbar/> in Apps div-tag too render Tabsbar
// include <Bilde svg="<svg>..." to render picture
