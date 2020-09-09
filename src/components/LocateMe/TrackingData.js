import React from 'react';

const TrackingData = props => {
	const watch = {
		display: props.data.watching && "none"
	}
	
	const noWatch = {
		display: !props.data.watching && "none"
	};

	const dataCleared = {
		display: props.data.dataCleared && "none"
	};

	return (
		<div
			className="container-fluid text-center animate__animated animate__fadeIn">
			<h1>LocateMe <i style={{color: 'blue'}} className="fa fa-globe fa-lg"></i></h1>
			
			<div>
				<button
					className="btn btn-primary btn-lg animate__animated animate__fadeInLeft"
					onClick={props.handleLocate}><i className="fa fa-map-marker"></i> Locate Me</button>
				<button
					className="btn btn-success btn-lg animate__animated animate__fadeInRight"
					style={watch}
					onClick={props.handleStartWatch}><i className="fa fa-map-o"></i> <i className="fa fa-car"></i> Locate and Watch Me
				</button>
				<button
					className="btn btn-danger btn-lg animate__animated animate__fadeInRight"
					style={noWatch}
					onClick={props.handleStopWatch}>Stop Watching Me
				</button>
			</div>
			
			<div style={dataCleared}>
				{props.data.trackingStatus ? <div>Getting location...</div> : null}
				
				{props.data.isOnline ? <div>navigator: <span style={{color: 'green'}}>online</span></div> 
					:props.data.isOnline === false ? <div>navigator: <span style={{color: 'red'}}>offline</span></div>
				: null}

				{props.data.trackingAccepted ? <div>geolocation: <span style={{color: 'green'}}>access granted</span></div>
					:props.data.trackingAccepted === false || props.data.trackingError ? <div>geolocation: <span style={{color: 'red'}}>access denied</span><br/> reason: {props.data.trackingError}</div>
				: null}

				{props.data.trackingAccepted ? <div>
													<b>Latitude</b>: {props.data.latitude} <br />
													<b>Longitude</b>: {props.data.longitude} <br />
													<b>Accuracy</b>: {props.data.accuracy} km<br />
													(Searchable: <b>{`${props.data.latitude} ${props.data.longitude}`}</b>)
												</div>
					: null}

				<button
					className="btn btn-danger btn-lg animate__animated animate__fadeIn"
					onClick={props.handleClear}>Clear
				</button>
			</div>
		</div>
	);
};

export default TrackingData;