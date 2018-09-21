import React from 'react';
import Media from './Media.js';
import './CategoryPane.css';
/*
Thoughts: When creating a category pane give it objects per category.
{id, methods and what to fill it with}
*/

export default function CategoryPane(props){
  return(
    <div className = "cp-flex-container">
      <Media method = {props.method} name = "Pictures" categories = {[{id : 0, name : "Animals"},
       {id : 1, name : "Seasons"},
       {id : 2, name : "Heroes"}]}/>
   <Media  method = {props.method} name = "Text" categories = {[{id : 3, name : "Children"},
       {id : 4, name : "Quotes"},
       {id : 5, name : "Jokes"}]}/>
      <Media  method = {props.method} name = "Songs" categories = {[{id : 6, name : "Rap"},
       {id : 7, name : "Plinkle plonk"},
       {id : 8, name : "Songy Song"}]}/>
    </div>
  )
}
