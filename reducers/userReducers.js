
import { getActionStates } from '../utils/reduxUtils';
import {successState, errorState, loadingState } from  '../utils/defaultStates';
import { GET_BP, GET_SPO, GET_TEMPERATURE, CREATE_BP, CREATE_SPO, CREATE_TEMPERATURE } from '../actions/actionType';

const initialState = {}
export function getBPResponse(state=initialState, action){

	switch(action.type){
		case getActionStates(GET_BP).success:
			return {...successState, data: action.data}
		case getActionStates(GET_BP).inProgress:
			return {...loadingState, loading: action.loading}
		case getActionStates(GET_BP).failure:
			return {...errorState, error: action.error}
		default:
			return state
	}
}

export function getTemperatureResponse(state=initialState, action){

	switch(action.type){
		case getActionStates(GET_TEMPERATURE).success:
			return {...successState, data: action.data}
		case getActionStates(GET_TEMPERATURE).inProgress:
			return {...loadingState, loading: action.loading}
		case getActionStates(GET_TEMPERATURE).failure:
			return {...errorState, error: action.error}
		default:
			return state
	}
}
export function getSPOResponse(state=initialState, action){

	switch(action.type){
		case getActionStates(GET_SPO).success:
			return {...successState, data: action.data}
		case getActionStates(GET_SPO).inProgress:
			return {...loadingState, loading: action.loading}
		case getActionStates(GET_SPO).failure:
			return {...errorState, error: action.error}
		default:
			return state
	}
}

export function createBPResponse(state=initialState, action){

	switch(action.type){
		case getActionStates(CREATE_BP).success:
			return {...successState, data: action.data}
		case getActionStates(CREATE_BP).inProgress:
			return {...loadingState, loading: action.loading}
		case getActionStates(CREATE_BP).failure:
			return {...errorState, error: action.error}
		default:
			return state
	}
}

export function createTemperatureResponse(state=initialState, action){

	switch(action.type){
		case getActionStates(CREATE_TEMPERATURE).success:
			return {...successState, data: action.data}
		case getActionStates(CREATE_TEMPERATURE).inProgress:
			return {...loadingState, loading: action.loading}
		case getActionStates(CREATE_TEMPERATURE).failure:
			return {...errorState, error: action.error}
		default:
			return state
	}
}
export function createSPOResponse(state=initialState, action){

	switch(action.type){
		case getActionStates(CREATE_SPO).success:
			return {...successState, data: action.data}
		case getActionStates(CREATE_SPO).inProgress:
			return {...loadingState, loading: action.loading}
		case getActionStates(CREATE_SPO).failure:
			return {...errorState, error: action.error}
		default:
			return state
	}
}