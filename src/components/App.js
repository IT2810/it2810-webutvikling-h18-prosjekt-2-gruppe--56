import React, { Component } from 'react';
import './App.css';
import CategoryPane from './CategoryPane.js';
import ArtPane from './Artpane.js';



class App extends Component {
    render() {
        return (
            <div className="App">
                <ArtPane />
                <CategoryPane />
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
