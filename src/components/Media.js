import React, { Component } from 'react';
import './Media.css'
import Category from './Category';


export default function Media(props){
  const array = props.categories;
  console.log(array);
  return(
    <div className = "media-flex-item">
      <h3 className = "media-h3">{props.name}</h3>
      <form className = "media-form" action = "">
        {array
        .map(category =>
          //Must implement handleCategoryClick in App, send from categoryPane
          //handleClick = props.handleCategoryClick as prop in category
          <Category id = {category.id}  text = {category.name} name = {props.name}/>
        )}
      </form>
    </div>
  );
}
//const array = props.categories;

/*

*/
