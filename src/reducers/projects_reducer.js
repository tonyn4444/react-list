import todo_list_thumbnail from '../portfolio_pictures/thumbnail_todo_app.png';
import weather_forecast_thumbnail from '../portfolio_pictures/thumbnail_weather_forecast_app.png';
import youtube_search_thumbnail from '../portfolio_pictures/thumbnail_youtube_search.png';
import blog_thumbnail from '../portfolio_pictures/thumbnail_blog_app.png';
import barID from '../portfolio_pictures/barID.png';
import financeGo from '../portfolio_pictures/finance-go.png';
import youtube_search_full from '../portfolio_pictures/youtube_search.png'
import weather_forecast_full from '../portfolio_pictures/weather_forecast_full.png';
import blog_full from '../portfolio_pictures/blog_full.png';
import barID_full from '../portfolio_pictures/barID_full.png';

export default function() {
	return [
		{ name: 'Finance-Go', thumbnail_image: financeGo, about: about_financeGO, stack: financeGO_stack },
		{ name: 'Weather Forecast', thumbnail_image: weather_forecast_full, about: about_weather_forecast, stack: weather_forecast_stack },
		{ name: 'Youtube Search', thumbnail_image: youtube_search_full, about: about_youtube_search, stack: youtube_search_stack },
		{ name: 'BarID', thumbnail_image: barID_full, about: about_barID, stack: barID_stack },
		{ name: 'Blog', thumbnail_image: blog_full, about: about_blog, stack: blog_stack }
		// { name: 'To Do List', thumbnail_image: todo_list_thumbnail }
	];
}

const barID_stack = "React Native – Redux – Firebase API – iBeacon (IOS Location Architecture)"
const financeGO_stack = "Ruby on Rails - Devise - Postgresql - YahooFinance API."
const blog_stack = "React/Redux - React-Router - ReduxForm - Axios"
const youtube_search_stack = "React/Redux - Axios - YouTube API"
const weather_forecast_stack = "React-Sparklines - OpenWeatherMap API - React/Redux - Axios - Lodash"

const about_barID = "An application that makes communication and purchasing of drinks easier between bars and their prospective clients. "
const about_financeGO = "This is an application that allows users to easily keep track of company stocks in the market. Users can also search for, add, and view profiles of their friends on the site. "
const about_blog = "Blog Application created using React/Redux. Network requests made from separate API to store and retrieve data for posts."
const about_youtube_search = "Single page application that utilizes YouTube API for video searches."
const about_weather_forecast = "Weather Forecast application that gives users a 5-day forecast for searched cities."