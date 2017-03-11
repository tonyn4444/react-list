import React from 'react';

const ProjectListItem = ({ project, selectProject }) => {
	return (
		<li onClick={() => selectProject(project)} className="list-group-item">
			<div className="video-list media">

				<div className="media-left">
				{project.name}
					<img className="media-object" src={project.thumbnail_image} />
				</div>

			</div>
		</li>

	)
}

export default ProjectListItem;