import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Category from './Category';
import Media from './Media';
import Tabsbar from './Tabsbar.js';
import Bilde from './Bilde.js';
import CategoryPane from './CategoryPane.js'


class ComponentTest extends Component {

  loadPic(path){
    console.log("hei");
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", path, true);
    xhttp.onreadystatechange = function()
      {
      if(this.readyState == 4 && this.status == 200){
        let svg = xhttp.responseXML.documentElement;
        svg = document.importNode(svg,true);
        document.getElementById("bilde").appendChild(svg);
      }
    };
    //Må sette urlen slik at den henter dataen vi trenger(bilder) fra webserveren som kjører på den virtuelle maskinen.
    xhttp.send();
  }

  render() {
      return (
          //Må være flex-container
          <div>
            <h2 id = "freddie">Hey, hey, hey!</h2>
            <Button click = {() => {this.loadDoc()}}/>
          </div>
      );
  }

}
class Button extends Component {
  render(){
    return(
      <button type = "button" onClick = {this.props.click}>Boyio</button>
    )
  }
}


export default ComponentTest;
