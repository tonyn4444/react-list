import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import activeProjectReducer from './active_project_reducer';

const rootReducer = combineReducers({
	projects: projectsReducer,
	active_project: activeProjectReducer
});

export default rootReducer;
