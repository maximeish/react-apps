import initState from '../store/state';
import * as ACTION_TYPES from '../actions/action_types';


const rootReducer = (state = initState, action) => {
	switch(action.type) {
		case ACTION_TYPES.TRACKING:
			return {
				...state,
				tracking: action.status
			};
		case ACTION_TYPES.IS_ONLINE:
			return {
				...state,
				isOnline: action.status
			};
		case ACTION_TYPES.ACCEPT_TRACKING:
			return {
				...state,
				trackingAccepted: action.status
			};
		case ACTION_TYPES.TRACKING_ERROR:
			return {
				...state,
				trackingError: action.error
			};
		case ACTION_TYPES.SET_LAT_LONG:
			return {
				...state,
				latitude: action.lat,
				longitude: action.long,
				accuracy: action.acc
			};
		case ACTION_TYPES.SET_WATCH:
			return {
				...state,
				watching: action.status
			};
		case ACTION_TYPES.SET_CLEAR:
			return {
				...state,
				dataCleared: action.status
			};
		default:
			return state;
	};
};

export default rootReducer;