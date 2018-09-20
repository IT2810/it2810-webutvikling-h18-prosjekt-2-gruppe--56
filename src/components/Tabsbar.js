import React from 'react';
import Tab from "./Tab.js"
import "./Tabsbar.css"


export default function Tabsbar(props){

	const indexes = [0,1,2,3];

	return (<div className = "Tabsbar">
	<div className="desktop">
		{indexes.map(Index => <Tab index ={Index} handleTabClick = {props.handleTabClick} active = {false}/>)}
	</div>
	<div className = "Mobile">
		<div classID="row1">
			<Tab index ={0}/>
			<Tab index = {1}/>
		</div>
		<div classID="row2">
			<Tab index ={2}/>
			<Tab index = {3}/>
		</div>
	</div>
</div>);
}
