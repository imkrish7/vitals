import { combineReducers} from 'redux'
import { getBPResponse, getSPOResponse, getTemperatureResponse, createBPResponse, createSPOResponse, createTemperatureResponse } from './userReducers'

const rootReducers = combineReducers({
	getTemperatureResponse,
	getBPResponse,
	getSPOResponse,
	createBPResponse,
	createSPOResponse,
	createTemperatureResponse
});

export default rootReducers;