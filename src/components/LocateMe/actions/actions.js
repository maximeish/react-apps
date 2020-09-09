import * as ACTION_TYPES from './action_types';

export const markOnline = status => ({
	type: ACTION_TYPES.IS_ONLINE,
	status
});

export const locateUser = status => ({
	type: ACTION_TYPES.TRACKING,
	status
});

export const acceptTracking = status => ({
	type: ACTION_TYPES.ACCEPT_TRACKING,
	status
});

export const setTrackingError = error => ({
	type: ACTION_TYPES.TRACKING_ERROR,
	error
});

export const setLatitude_Longitude = (lat, long, acc) => ({
	type: ACTION_TYPES.SET_LAT_LONG,
	lat,
	long,
	acc
});

export const setWatch = status => ({
	type: ACTION_TYPES.SET_WATCH,
	status
});

export const setClear = status => ({
	type: ACTION_TYPES.SET_CLEAR,
	status
});