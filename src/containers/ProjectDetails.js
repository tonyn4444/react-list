import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetails extends Component {
	render() {
		// console.log(this.props);
		return ( 
			<div className="project-details-div">
				<img className="project-details" src={this.props.active_project.thumbnail_image} alt="Problem loading..."/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { active_project: state.active_project }
}

export default connect(mapStateToProps)(ProjectDetails);
