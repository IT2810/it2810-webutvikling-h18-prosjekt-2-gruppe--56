import React, { Component } from 'react';
import './App.css';
import CategoryPane from './CategoryPane.js';
import Tabsbar from './Tabsbar.js';
import Tittel from './Tittel.js';
import Art from './Art.js';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        }
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabID) {

    }

    render() {
        return (
            <div className="App">
                <div className ="headPane">
                    <Tittel artName = "Tittel..." />
                    <Tabsbar handleTabClick={this.handleTabClick} acticeTab ={this.state.activeTab} />
                </div>
                <div className = "bodyPane">
                    <Art />
                    <CategoryPane />
                </div>
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
