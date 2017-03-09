import React from 'react';

const ProjectListItem = ({ project }) => {
	return (
		<li>
			{project.name}
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object image" src={project.image} />
				</div>

				<div className="media-body">
					<div className="media-heading">{project.name}</div>
				</div>
			</div>
		</li>

	)
}

export default ProjectListItem;