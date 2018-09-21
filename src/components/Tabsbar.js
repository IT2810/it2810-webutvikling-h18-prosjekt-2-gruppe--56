import React from 'react';
import Tab from "./Tab.js"
import "./Tabsbar.css"


export default function Tabsbar(props){
	return (<div className = "Tabsbar">
 	 <div className="desktop">
		<Tab className="columns" index ={0}/>
		<Tab className="columns" index = {1}/>
		<Tab className="columns" index = {2}/>
		<Tab className="columns" index = {3}/>
	</div>
 </div>);
}
