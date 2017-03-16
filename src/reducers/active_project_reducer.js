import financeGo from '../portfolio_pictures/finance-go.png';

const INITIAL_STATE = { name: 'Finance-Go', thumbnail_image: financeGo, about: "This is an application that allows users to easily keep track of company stocks in the market. Users can also search for, add, and view profiles of their friends on the site.", stack: "Ruby on Rails - Devise - Postgresql - YahooFinance API." }

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'SELECTED_PROJECT':
			return action.payload;
	};
	return state;
}
