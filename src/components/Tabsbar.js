import React, { Component } from 'react';
import "./Tabsbar.css"

export function Tab(props) {
	/*Should retrive handleTabClick-event from Art-Pane*/
	return <div>Picture {props.index}</div>
}

export default function Tabsbar(props){
	return (<div className = "Tabsbar">
		<Tab index ='0'/>
		<Tab index = '1'/>
		<Tab index = '2'/>
		<Tab index = '3'/>
	</div>);
}
