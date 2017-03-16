import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetails extends Component {
	render() {
		if (!this.props.project) {
			return <div>Select a project for more details.</div>;
		}

		console.log(this.props.project)

		return ( 
			<div className="project-details-div">
				<div className="project-detail-name">
					{this.props.project.name}
				</div>
				<img className="project-details" src={this.props.project.thumbnail_image} alt="Problem loading..."/>
				<div className="about-project">
					<div>
						Description: {this.props.project.about}
					</div>
					<div className="project-stack">
						Stack: {this.props.project.stack}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { project: state.active_project }
}

export default connect(mapStateToProps)(ProjectDetails);
