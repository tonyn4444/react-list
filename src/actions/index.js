const SELECTED_PROJECT = 'SELECTED_PROJECT'

export function selectProject(project) {
	return {
		type: SELECTED_PROJECT,
		payload: project
	}
}

export default SELECTED_PROJECT;
