import React, { Component } from 'react';
import { connect} from 'react-redux';
import ProjectListItem from '../components/ProjectListItem';

class ProjectList extends Component {
	renderProjectList() {
		return this.props.projects.map((project) => {
			return (
				<ProjectListItem project={project} key={project.name}>
					{project.name}
				</ProjectListItem>
			)
		});	
	}
	render() {
		return (
			<ul>{this.renderProjectList()}</ul>
		);
	}
}

function mapStateToProps(state) {
	return { projects: state.projects }
}

export default connect(mapStateToProps)(ProjectList);
