import React from 'react';
import './Media.css'
import Category from './Category';


export default function Media(props){
  return(
    <div className = "media-flex-item">
      <h3 className = "media-h3">{props.name}</h3>
      <form className = "media-form" action = "">
        {props.categories
        .map(category =>
          //Must implement handleCategoryClick in App, send from categoryPane
          //handleClick = props.handleCategoryClick as prop in category
          <Category click = {props.method} id = {category.id} key = {category.id.toString()} text = {category.name} name = {props.name}/>
        )}
      </form>
    </div>
  );
}
//const array = props.categories;

/*

*/
