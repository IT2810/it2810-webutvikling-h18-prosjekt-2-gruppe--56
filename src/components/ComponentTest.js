import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Category from './Category';
import Media from './Media';
import Tabsbar from './Tabsbar.js';
import Bilde from './Bilde.js';
import CategoryPane from './CategoryPane.js'


class ComponentTest extends Component {

  loadDoc(){
    console.log("hei");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
      {
      if(this.readyState == 4 && this.status == 200){
        document.getElementById("freddie").innerHTML = this.responseText;
        console.log(this.responseText)
      }
    };
    //Må sette urlen slik at den henter dataen vi trenger(bilder) fra webserveren som kjører på den virtuelle maskinen.
    xhttp.open("GET", "../test.txt",true);
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
