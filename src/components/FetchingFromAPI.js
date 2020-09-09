import React from 'react';
import WeatherInfo from './sub-components/WeatherInfo';

class FetchingFromAPI extends React.Component {

	constructor() {
		super();
		this.state = {
			isLoading: false,
			weather: {
				location: undefined,
				weather: [{description: undefined}]
			},
			errorFetching: undefined
		}
		this.handleFetchWeather = this.handleFetchWeather.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleFetchWeather() {
		this.setState({isLoading: true});
		fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Norway",
		{
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
				"x-rapidapi-key": "396e02c164msh07f68b0e704f70ap1a3483jsn7cf61f90217b"
			}
		})

		.then(response => response.json())
		.then(data => {
			this.setState({
				weather: data,
				isLoading: false,
				errorFetching: undefined
			});
		})
		.catch(() => {
			this.setState({
				errorFetching: "Could not fetch data",
				isLoading: false
			})
		});
	}

	handleClear() {
		this.setState({
			weather: {
				name: undefined,
				weather: [{description: undefined}]
			}
		})
	}
	
	render() {
		return (
			<React.Fragment>
				<WeatherInfo
					isLoading={this.state.isLoading} 
					Location={this.state.weather.name}
					skyDesc={this.state.weather.weather[0].description}
					Err={this.state.errorFetching}
					handleFetchWeather={this.handleFetchWeather}
					handleClear={this.handleClear} />
			</React.Fragment>
		);
	}
}

export default FetchingFromAPI;