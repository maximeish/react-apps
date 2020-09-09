const initState = {
	isOnline: null,
	tracking: false,
	trackingAccepted: null,
	trackingError: null,
	watching: null,
	latitude: null,
	longitude: null,
	accuracy: null,
	dataCleared: true,
	trackingOptions: {
		enableHighAccuracy: true,
		maximumAge: 30000,
		timeout: 20000
	}
};

export default initState;