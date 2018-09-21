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
        const array = this.createAudioElements();
        this.state = {
            activeTab: 0,
            activeImageCat: 0,
            activeSoundCat: 3,
            activeTextCat: 6,
            data:{}
        }
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    createAudioElements(){
      let array = [];
      for (let i = 3; i < 6; i++){
        for (let x = 0; x<4; x++){
          array.push(new Audio("/res/Sound/" + i.toString() + x.toString() + '.mp3'));
        }
      }
    }
    playAudioElement(tab, category){
      this.array[tab][category].play();
    }

    handleTabClick(tabID) {
        this.setState({
            activeTab: tabID
        });
        //activityOnPage Handle
    }

    handleCategoryClick = (id) => {
      let newActives = [];
      if (id in [0,1,2]){
          newActives = [id, this.state.activeSoundCat, this.state.activeTextCat]
      } else if (id in [3,4,5]) {
          newActives = [this.state.activeImageCat, id, this.state.activeTextCat]
      } else{
          newActives = [this.state.activeImageCat,  this.state.activeSoundCat, id]
      }
      let dataIndex = this.state.activeTab.toString() + id.toString();
      let updatedData = this.getData(dataIndex);
      let new_data = this.state.data
      new_data[dataIndex] = updatedData;
      this.setState({
          activeTextCat: newActives[0],
          activeSoundCat: newActives[1],
          activeTextCat: newActives[2],
          data: new_data
      })
    }

    getData(dataIndex){
        if (!dataIndex in this.state.data){
            let media = this.determineMedia(dataIndex.charAt(0).parseInt());
            return this.fetchFile(media[0], dataIndex.charAt(0), dataIndex.charAt(1), media[1])
        }
        else {
            return(this.state.data[dataIndex])
        }
    }

    determineMedia(val){
        if (val in [0,1,2]){
            return ["Image", "svg"]
        } else if (val in [3,4,5]) {
            return ["Text", "json"]
        }
        return ["Sound","mp3"]
    }

  // Henter inn bildet og legger det i en lagret state
    fetchFile(media, category, filename, filetype){
        fetch("res/" + media + "/" + category + "/" + filename +  "." + filetype)
        .then(response => response.text())
        .then(text => {
            return(text);
            });
    }

    //Må sette urlen slik at den henter dataen vi trenger(bilder) fra webserveren som kjører på den virtuelle maskinen.

    render() {
        return (
        <div className="App">
            <div className ="headPane">
                <Tittel artName = "Tittel..." />
                <Tabsbar handleTabClick={this.handleTabClick} activeTab ={this.state.activeTab} />
            </div>
            <div className = "bodyPane">
                <Art image = {this.state.data[this.state.activeTab.toString()+this.state.activeImageCat.toString()]}
                    Text = {this.state.data[this.state.activeTab.toString()+this.state.activeTextCat.toString()]} />
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
