import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProject } from '../actions';
import ProjectListHeader from './ProjectListHeader';

class ProjectListItem extends Component {

	renderProjectList() {
		return this.props.projects.map((project) => {
			return (
				<li 
					className="list-group-item" 
					onClick={() => this.props.selectProject(project)}
					key={project.name}
				>
				<div className="video-list media">
					<div className="media-left">
						{project.name}
						<img className="media-object" src={project.thumbnail_image} alt="Problem loading..." />
					</div>

				</div>
			</li>
			)
		});	
	}

	render() {
		console.log(this.props);
		return (
			<div className="project-list img-responsive">
				<ProjectListHeader />
				<ul>{this.renderProjectList()}</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { projects: state.projects }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProject: selectProject }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListItem);