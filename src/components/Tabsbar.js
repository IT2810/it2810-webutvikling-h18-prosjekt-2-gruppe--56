import React, { Component } from 'react';
import Tab from "./Tab.js"
import "./Tabsbar.css"


export default function Tabsbar(props){
	return (<div className = "Tabsbar">
	<div className="desktop">
		<Tab index ='0'/>
		<Tab index = '1'/>
		<Tab index = '2'/>
		<Tab index = '3'/>
	</div>
	<div className = "Mobile">
		<div classID="row1">
			<Tab index ='0'/>
			<Tab index = '1'/>
		</div>
		<div classID="row2">
			<Tab index ='2'/>
			<Tab index = '3'/>
		</div>
	</div>
</div>);
}
