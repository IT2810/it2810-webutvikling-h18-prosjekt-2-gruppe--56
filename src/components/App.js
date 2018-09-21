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

    handleTabClick(tabID) {
        this.setState({
            activeTab: tabID
        });
        //activityOnPage Handle
    }

    handleCategoryClick = (id) => {
        //  Finner ut hvilke kategori som er oppdatert
        let newActives = [];
        if (id in [0,1,2]){
            newActives = [id, this.state.activeSoundCat, this.state.activeTextCat]
        } else if (id in [3,4,5]) {
            newActives = [this.state.activeImageCat, id, this.state.activeTextCat]
        } else{
            newActives = [this.state.activeImageCat,  this.state.activeSoundCat, id]
        }
        this.getData(this.state.activeTab.toString() + id.toString());  //Må vi laste inn data?
        this.setState({  // Oppdaterer state ved hver click
            activeTextCat: newActives[0],
            activeSoundCat: newActives[1],
            activeTextCat: newActives[2]
        });  //Trigger et render()-kall
    }

    getData(dataIndex){
        if (!this.state.data[dataIndex]){
            let media = this.determineMedia(parseInt(dataIndex.charAt(0)));
            this.fetchFile(media[0], dataIndex.charAt(0), dataIndex.charAt(1), media[1])
            .then(fetched_data => {
                let new_data = this.state.data;
                new_data[dataIndex] = fetched_data;
                this.setState({  //Trigger et render()-kall. Kun denne oppdaterer det som vises på skjerm
                    data : new_data
                })
            });
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

    fetchFile(media, category, filename, filetype){
        return axios.get("res/" + media + "/" + category + "/" + filename +  "." + filetype)
        .then(response => {
            return response.data
        });
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

    render() {
      console.log(this.state.data);
        return (
        <div className="App">
            <div className ="headPane">
                <Tittel artName = "Tittel..." />
                <Tabsbar handleTabClick={this.handleTabClick} activeTab ={this.state.activeTab} />
            </div>
            <div className = "bodyPane">
                <Art image = {this.state.data[this.state.activeTab.toString()+this.state.activeImageCat.toString()]}
                  text={(this.state.data[this.state.activeTab.toString()+
                      this.state.activeTextCat.toString()]) } />
                <CategoryPane method ={this.handleCategoryClick}/>
            </div>
        </div>
      );
  }
}

export default App;
