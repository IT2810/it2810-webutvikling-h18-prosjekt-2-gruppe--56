import React, { Component } from 'react';
import "./Tab.css"

/*Should retrive handleTabClick-event from App*/
class Tab extends Component{
	render() {
		return
		<div className="Tab">Art {props.index + 1} onClick={props.handleTabClick(props.index)}</div>
	}
}

export default Tab;
