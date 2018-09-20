import React, { Component } from 'react';
import './App.css';
import CategoryPane from './CategoryPane.js';
import Tabsbar from './Tabsbar.js';
import Tittel from './Tittel.js';
import Art from './Art.js';
import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            activeImage: 0,
            activeSound: 3, 
            activeText: 6,
        }
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    handleTabClick(tabID) {
        this.setState({
            activeTab: tabID
        })
    }

    handleCategoryClick = (id) => {
      this.setState({
          activeCatagory: id
      })
      console.log(id);
    }

    render() {
        return (
        <div className="App">
            <div className ="headPane">
                <Tittel artName = "Tittel..." />
                <Tabsbar handleTabClick={this.handleTabClick} activeTab ={this.state.activeTab} />
            </div>
            <div className = "bodyPane">
                <Art />
                <CategoryPane method ={this.handleCategoryClick}/>
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
