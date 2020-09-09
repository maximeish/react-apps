import * as ACTION_TYPE from './action_types';

export const updateName = name => ({
	type: ACTION_TYPE.UPDATE_NAME,
	name
});

export const updateBio = bio => ({
	type: ACTION_TYPE.UPDATE_BIO,
	bio
});

export const updateImgLink = imgLink => ({
	type: ACTION_TYPE.UPDATE_IMGLINK,
	imgLink
});

export const updateImgAccessible = status => ({
	type: ACTION_TYPE.UPDATE_IMGACCESSIBLE,
	status
});

export const updateColor = color => ({
	type: ACTION_TYPE.UPDATE_COLOR,
	color
});

export const updateProfileCreatedStatus = status => ({
	type: ACTION_TYPE.UPDATE_PROFILE_CREATED_STATUS,
	status
});

export const updateImgLoadingStatus = status => ({
	type: ACTION_TYPE.UPDATE_IMG_LOADING_STATUS,
	status
});