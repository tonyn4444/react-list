import React, { Component } from 'react';
import { connect} from 'react-redux';
import ProjectListItem from '../components/ProjectListItem';
import ProjectListHeader from '../components/ProjectListHeader';

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
			<div>
				<ProjectListHeader />
					<ul>{this.renderProjectList()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { projects: state.projects }
}

export default connect(mapStateToProps)(ProjectList);
