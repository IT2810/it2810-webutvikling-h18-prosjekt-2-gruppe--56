import React, {Component} from 'react';
import "./Tab.css"

/*Should retrive handleTabClick-event from App*/
class Tab extends Component{
	render() {
		const styles = {
			color: "#01FF70",
			borderBottom: "5px solid #01FF70"
		}

		return(
		<div className="Tab" onClick={() => this.props.handleTabClick(this.props.index)} style = {
				this.props.active == true ? styles : {} }>
				Art {this.props.index + 1}</div>);
	}
}

export default Tab;
