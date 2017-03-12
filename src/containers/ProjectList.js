import React, { Component } from 'react';
import { connect} from 'react-redux';
import ProjectListItem from '../components/ProjectListItem';
import ProjectListHeader from '../components/ProjectListHeader';
import { bindActionCreators } from 'redux';
import { selectProject } from '../actions';

class ProjectList extends Component {
	// renderProjectList() {
	// 	return this.props.projects.map((project) => {
	// 		return (
	// 			<ProjectListItem 
	// 				project={project} 
	// 				key={project.name}
	// 				action={this.props.selectProject}
	// 			>
	// 				{project.name}
	// 			</ProjectListItem>
	// 		)
	// 	});	
	// }
	render() {
		// console.log(this.props.selectProject)
		return (
			<div className="project-list">
				<ProjectListHeader />
					<ul></ul>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProject }, dispatch)
}

function mapStateToProps(state) {
	return { projects: state.projects }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
