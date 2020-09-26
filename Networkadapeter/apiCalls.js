import axios from 'axios';


export const apiRequest = (dispatch, params, url, requestType, successActions, loadingActions, errorActions) => {
	let headers = { 'Content-Type': 'application/json' };
	let defaultUrl = '';
	defaultUrl = 'https://cryptic-ravine-14675.herokuapp.com';

	let reqObj = { method: requestType, url: defaultUrl + url, data: JSON.stringify(params), headers };

	if (dispatch && loadingActions) dispatch(loadingActions(true));

	axios(reqObj)
		.then(res => {
			if (dispatch && loadingActions) dispatch(loadingActions(false));

			if (dispatch && successActions) dispatch(successActions(res.data));
		})
		.catch(error => {
			console.log(error);
			if (dispatch && errorActions) dispatch(errorActions(error.response));
		});
};