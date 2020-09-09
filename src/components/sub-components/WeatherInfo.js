import React from 'react';

const WeatherInfo = props => {
	const loadingStyles = props.isLoading ? {display: "block"} : {display: "none"};
	const Location = props.Location || "N/A";
	const skyDesc = props.skyDesc || "N/A";
	const errorStyles = props.Err ? {display: "block",
									color: "#c11", 
									fontSize: "large",
									fontWeight: "bold",
									letterSpacing: 2} : {display: "none"};
	const clearBtnStyles = props.Location ? {display: "block"} : {display: "none"};
	return (
		<React.Fragment>
				<h4 style={loadingStyles}>Loading...</h4>
				<small>(Location)</small>
				<h1>{Location}</h1>::::::::::::::::::::::::::::::::
				<small>(Sky)</small>
				<h1>{skyDesc}</h1>
				<small style={errorStyles}>{props.Err}</small>
				<button onClick={props.handleFetchWeather}>FetchWeather</button>
				<button style={clearBtnStyles} onClick={props.handleClear}>ClearData</button>
		</React.Fragment>
	);
}

export default WeatherInfo;