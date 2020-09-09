import * as ACTION_TYPE from '../actions/action_types';
import initState from '../store/state';

const createProfileReducer = (state = initState, action) => {
	switch(action.type) {
		case ACTION_TYPE.UPDATE_NAME:
			return {
				...state,
				name: action.name
			};
		case ACTION_TYPE.UPDATE_BIO:
			return {
				...state,
				bio: action.bio
			};
		case ACTION_TYPE.UPDATE_IMGLINK:
			return {
				...state,
				imgLink: action.imgLink
			};
		case ACTION_TYPE.UPDATE_IMGACCESSIBLE:
			return {
				...state,
				isImgAccessible: action.status
			}
		case ACTION_TYPE.UPDATE_COLOR:
			return {
				...state,
				color: action.color
			};
		case ACTION_TYPE.UPDATE_PROFILE_CREATED_STATUS:
			return {
				...state,
				isProfileCreated: action.status
			};
		case ACTION_TYPE.UPDATE_IMG_LOADING_STATUS:
			return {
				...state,
				isImgLoading: action.status
			}
		default:
			return state
	};
};

export default createProfileReducer;