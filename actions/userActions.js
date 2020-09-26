
import { getActionStates } from '../utils/reduxUtils';
import { CREATE_BP, CREATE_SPO, CREATE_TEMPERATURE, GET_TEMPERATURE, GET_SPO, GET_BP } from './actionType'
import { apiRequest } from '../Networkadapeter/apiCalls';
export const createBPLoading = (loading) => {
	return {
		type: getActionStates(CREATE_BP).inProgress,
		loading
	}
}

export const createBPError = (error) => {
	return {
		type: getActionStates(CREATE_BP).failure,
		error
	}
}

export const createBPSuccess = (data)=>{
	return {
		type: getActionStates(CREATE_BP).success,
		data
	}
}

export const createBP = (params) => {
	const url = "/vitals/bp"
	const requestType = "POST"
	return dispatch => apiRequest(dispatch, params, url ,requestType, createBPSuccess, createBPLoading, createBPError)
}



export const createSPOLoading = (loading) => {
	return {
		type: getActionStates(CREATE_SPO).inProgress,
		loading
	}
}

export const createSPOError = (error) => {
	return {
		type: getActionStates(CREATE_SPO).failure,
		error
	}
}

export const createSPOSuccess = (data)=>{
	return {
		type: getActionStates(CREATE_SPO).success,
		data
	}
}

export const createSPO = (params) => {
	const url = "/vitals/spo"
	const requestType = "POST"
	return dispatch => apiRequest(dispatch, params, url, requestType, createSPOSuccess, createSPOLoading, createSPOError)
}


export const createTemperatureLoading = (loading) => {
	return {
		type: getActionStates(CREATE_TEMPERATURE).inProgress,
		loading
	}
}

export const createTemperatureError = (error) => {
	return {
		type: getActionStates(CREATE_TEMPERATURE).failure,
		error
	}
}

export const createTemperatureSuccess = (data)=>{
	return {
		type: getActionStates(CREATE_TEMPERATURE).success,
		data
	}
}

export const createTemperature = (params) => {
	const url = "/vitals/temperature"
	const requestType = "POST"
	return dispatch => apiRequest(dispatch, params, url, requestType, createTemperatureSuccess, createTemperatureLoading, createTemperatureError)
}

export const getTemperatureLoading = (loading) => {
	return {
		type: getActionStates(GET_TEMPERATURE).inProgress,
		loading
	}
}

export const getTemperatureError = (error) => {
	return {
		type: getActionStates(GET_TEMPERATURE).failure,
		error
	}
}

export const getTemperatureSuccess = (data)=>{
	return {
		type: getActionStates(GET_TEMPERATURE).success,
		data
	}
}

export const getTemperature = (params) => {
	const url = "/vitals/temperature"
	const requestType = "GET"
	return dispatch => apiRequest(dispatch, params, url, requestType, getTemperatureSuccess, getTemperatureLoading, getTemperatureError)
}

export const getBPLoading = (loading) => {
	return {
		type: getActionStates(GET_BP).inProgress,
		loading
	}
}

export const getBPError = (error) => {
	return {
		type: getActionStates(GET_BP).failure,
		error
	}
}

export const getBPSuccess = (data)=>{
	return {
		type: getActionStates(GET_BP).success,
		data
	}
}

export const getBP = (params) => {
	const url = "/vitals/bp"
	const requestType = "GET"
	return dispatch => apiRequest(dispatch, params, url, requestType, getBPSuccess, getBPLoading, getBPError)
}

export const getSPOLoading = (loading) => {
	return {
		type: getActionStates(GET_SPO).inProgress,
		loading
	}
}

export const getSPOError = (error) => {
	return {
		type: getActionStates(GET_SPO).failure,
		error
	}
}

export const getSPOSuccess = (data)=>{
	return {
		type: getActionStates(GET_SPO).success,
		data
	}
}

export const getSPO = (params) => {
	const url = "/vitals/spo"
	const requestType = "GET"
	return dispatch => apiRequest(dispatch, params, url, requestType, getSPOSuccess, getSPOLoading, getSPOError)
}