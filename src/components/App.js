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
            activeTextCat: 3,
            activeSoundCat: 6,
            data:{}
        }
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    handleTabClick(tabID) {
        this.getData(this.state.activeImageCat.toString()+tabID.toString());
        this.getData(this.state.activeTextCat.toString()+tabID.toString());
        this.setState({
            activeTab: tabID
        });
    }

    handleCategoryClick = (id) => {
        //  Finner ut hvilke kategori som skal oppdateres
        console.log(id);
        if ([0,1,2].includes(id)){
            this.getData(id.toString()+this.state.activeTab.toString());  //Må vi laste inn data?
            this.setState({
                activeImageCat: id
            });
        } else if ([3,4,5].includes(id)) {
            this.getData(id.toString()+this.state.activeTab.toString() );  //Må vi laste inn data?
            this.setState({
                activeTextCat: id
            });
        }else{ // Oppdaterer state ved hver click
            //this.playAudioElement(this.state.activeTab, id);
            this.setState({
                activeSoundCat: id
            });
        }
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
        if ([0,1,2].includes(val)){
            return ["Image", "svg"]
        } else if ([3,4,5].includes(val)) {
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
        console.log(this.state);
        return (
        <div className="App">
            <div className ="headPane">
                <Tittel artName = "A Spectacular Responsiv Web Gallary" />
                <Tabsbar handleTabClick={this.handleTabClick} activeTab ={this.state.activeTab} />
            </div>
            <div className = "bodyPane">
                <Art image = {this.state.data[this.state.activeImageCat.toString()+this.state.activeTab.toString()]}
                  text={(this.state.data[this.state.activeTextCat.toString()+this.state.activeTab
                      .toString()])} />
                <CategoryPane method ={this.handleCategoryClick}/>
            </div>
        </div>
      );
  }
}
export default App;
