import todo_list_thumbnail from '../portfolio_pictures/thumbnail_todo_app.png';
import weather_forecast_thumbnail from '../portfolio_pictures/thumbnail_weather_forecast_app.png';
import youtube_search_thumbnail from '../portfolio_pictures/thumbnail_youtube_search.png';
import blog_thumbnail from '../portfolio_pictures/thumbnail_blog_app.png';

export default function() {
	return [
		{ name: 'To Do List', thumbnail_image: todo_list_thumbnail },
		{ name: 'Weather Forecast', thumbnail_image: weather_forecast_thumbnail },
		{ name: 'Youtube Search', thumbnail_image: youtube_search_thumbnail },
		{ name: 'Blog', thumbnail_image: blog_thumbnail }
	];
}
