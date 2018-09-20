import React, {Componenet} from 'react';
import Media from './Media.js';
import './CategoryPane.css';
/*
Thoughts: When creating a category pane give it objects per category.
{id, methods and what to fill it with}
*/

export default function CategoryPane(props){
  return(
    <div className = "cp-flex-container">
      <Media name = "Pictures" categories = {[{id : 0, name : "Dyr"},
       {id : 1, name : "Møbel"},
       {id : 2, name : "Dyr"}]}/>
      <Media name = "Text" categories = {[{id : 3, name : "Ibsen"},
       {id : 4, name : "Lothepus"},
       {id : 5, name : "Svampebob"}]}/>
      <Media name = "Songs" categories = {[{id : 6, name : "Rap"},
       {id : 7, name : "Plinkle plonk"},
       {id : 8, name : "Songy Song"}]}/>
    </div>
  )
}
