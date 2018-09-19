import React, { Component } from 'react';
import './Category.css'

//Creates category component. Remove export default only needed for testing.

//Name is neccessary to make radiobuttons correspond to each other.
export default function Category(props){
  //Must have oncClick method on radio button.
  //Method that tells App component that the data has changed.
  //Method should include id from category
  return (<div className = "category">
      <input type = "radio" name = {props.name}/>
      <label>{props.text}</label>
    </div>);
}
