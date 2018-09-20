import React, { Component } from 'react';
import "./Tab.css"


export default function Tab(props) {
	/*Should retrive handleTabClick-event from Art-Pane*/
	return <div className="Tab">Art {props.index + 1}</div>
}
