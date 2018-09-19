import React, { Component } from 'react';
import './Media.css'
import Category from './Category';


export default function Media(props){
  const array = props.categories;
  console.log(array);
  return(
    <form action = "">
      {array
      .map(category =>
        //Must implement handleCategoryClick in App, send from categoryPane
        //handleClick = props.handleCategoryClick as prop in category
        
        <Category id = {category.id}  text = {category.name} name = {props.name}/>
      )}
    </form>
  );
}
//const array = props.categories;

/*

*/
