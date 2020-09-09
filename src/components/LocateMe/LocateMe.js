import React from 'react';
import {connect} from 'react-redux';
import * as ACTIONS from './actions/actions';

import TrackingData from './TrackingData';

class LocateMe extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			watcher: null
		};
	}

	accessPosition = position => {
		console.log(position);
		const {latitude, longitude, accuracy} = position.coords;
		this.props.acceptTracking(true);
		this.props.getLocation(false);
		this.props.setLatitude_Longitude(latitude, longitude, accuracy / 1000);
	}

	trackingError = positioning_error => {
		this.props.setTrackingError(positioning_error.message);
		this.props.getLocation(false);
	}

	trackingHandler = trackingType => {
		if (navigator.onLine) {
			this.props.markOnline(true);
			if ('geolocation' in navigator) {
				if (trackingType === 'locateOnly') {
					const fetchLocation = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => resolve(position), error => reject(error), this.props.trackingOptions));

					fetchLocation
						.then(position => this.accessPosition(position))
						.catch(error => this.trackingError(error));
				} else {
					const fetchLocation = new Promise((resolve, reject) => {
							this.setState({
								watcher: navigator.geolocation.watchPosition(position => resolve(position), error => reject(error), this.props.trackingOptions)
							})
						});

					fetchLocation
						.then(position => this.accessPosition(position))
						.catch(error => this.trackingError(error));
				}
			}
		} else {
			this.props.markOnline(false);
			this.props.getLocation(false);
		}
	}
	

	handleLocate = () => {
		this.props.clearData(false);
		if (navigator.onLine) this.props.getLocation(true);

		this.trackingHandler('locateOnly');
	}

	handleStartWatch = () => {
		this.props.clearData(false);
		if (navigator.onLine) this.props.setWatch(true);
		this.trackingHandler('locateAndWatch');
	}

	handleStopWatch = () => {
		this.props.setWatch(false);
		navigator.geolocation.clearWatch(this.state.watcher);
	}

	handleClear = () => {
		this.props.clearData(true);
		this.props.acceptTracking(false);
		this.props.getLocation(false);
		this.props.markOnline(false);
		this.props.setTrackingError('');
		this.props.setLatitude_Longitude(null, null, null);
	}

	render() {
		return (
			<TrackingData
				data={this.props}
				handleLocate={this.handleLocate}
				handleStartWatch={this.handleStartWatch}
				handleStopWatch={this.handleStopWatch}
				handleClear={this.handleClear} />
		)
	}
};

const mapStateToProps = state => ({
	trackingStatus: state.tracking,
	isOnline: state.isOnline,
	trackingAccepted: state.trackingAccepted,
	trackingError: state.trackingError,
	latitude: state.latitude,
	longitude: state.longitude,
	accuracy: state.accuracy,
	watching: state.watching,
	dataCleared: state.dataCleared,
	trackingOptions: state.trackingOptions
});

const mapDispatchToProps = dispatch => ({
	getLocation: status => dispatch(ACTIONS.locateUser(status)),
	markOnline: status => dispatch(ACTIONS.markOnline(status)),
	acceptTracking: status => dispatch(ACTIONS.acceptTracking(status)),
	setTrackingError: error => dispatch(ACTIONS.setTrackingError(error)),
	setLatitude_Longitude: (lat, long, acc) => dispatch(ACTIONS.setLatitude_Longitude(lat, long, acc)),
	setWatch: status => dispatch(ACTIONS.setWatch(status)),
	clearData: status => dispatch(ACTIONS.setClear(status))
});

const Container = connect(mapStateToProps, mapDispatchToProps)(LocateMe);

export default Container;