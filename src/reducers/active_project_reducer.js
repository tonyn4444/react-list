import SELECTED_PROJECT from '../actions';
import financeGo from '../portfolio_pictures/finance-go.png';


const INITIAL_STATE = { name: 'Finance-Go', thumbnail_image: financeGo }


export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SELECTED_PROJECT:
			return action.payload;
	};
	return state;
}
