import React from 'react';
import Tab from "./Tab.js"
import "./Tabsbar.css"


export default function Tabsbar(props){

	const indexes = [0,1,2,3];

	return (<div className = "Tabsbar">


	<div className="desktop">
		{indexes.map(Index => <Tab className="columns" index ={Index} handleTabClick = {props.handleTabClick} active = {Index == props.activeTab ? true : false}/>)}

	</div>
 </div>);
}
