import React, { Component } from 'react';
import { View, Text , StyleSheet , Button, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Fontisto from 'react-native-vector-icons/dist/Fontisto'
import Material from 'react-native-vector-icons/dist/MaterialCommunityIcons'
// Custom Cards
import Temperature from './Cards/Temperature'
import Oximeter from './Cards/Oximeter'
import Blood from './Cards/BloodPressure'
// redux actions
import { createBP, createTemperature, createSPO } from '../actions/userActions';

// Icons component
const temperatureIcon = () => <Icon name="thermometer" size={30} color="rgba(19, 15, 64,0.7)"/>
const bloodPressureIcon = () => <Fontisto name="blood-drop" size={30} color="rgba(19, 15, 64,0.7)" />
const oximeterIcon =() => <Material name="heart-pulse" size={30} color="rgba(19, 15, 64,0.7)" />


class Measure extends Component {

	constructor(props){
		super(props);
		this.state = {
			temperature: 0,
			tempLoading: false,
			bpLoading: false,
			spLoading: false,
			blood: { min: 0, max: 0},
			oximeter: { spo2: 0, bpm: 0},
			updated: false,
			bpSent: false,
			spSent: false,
			tempSent: false
		}
	}

	tempMesurement = () => {
		this.setState({ tempLoading: true})
		let temp =Math.random() * (115 - 97.6) + 97.6
		let round = temp.toFixed(2)
		this.setState({
			temperature: round,
			tempLoading: false,
			updated: true,
			requestSent: false
		})
	}

	bpMesurement = () => {
		this.setState({ bpLoading : true})
		let minBP = Math.ceil((Math.random() * (90-60))) + 60
		let maxBP = Math.ceil((Math.random() * (180 - 120))) + 90
		this.setState({
			blood: { min: minBP, max: maxBP},
			bpLoading: false,
			updated: true
		})
	}

	spo2Mesurement = () => {
		this.setState({
			spLoading: true
		})
		let spo2 = Math.ceil(Math.random() * (100-90) + 90)
		let bpm = Math.ceil(Math.random() * (100-60) + 60)
		this.setState({
			oximeter: { spo2, bpm},
			spLoading: false,
			updated: true
		})
	}

	onComplete = () => {
		let params = {}
		if(this.state.temperature>0){
			params = { temperature: this.state.temperature}
			this.props.createTemperature(params)
			this.setState({bpSent: true})
		}

		if(this.state.blood.min>0){
			params = {}
			params = {min: this.state.blood.min, max: this.state.blood.max}
			this.props.createBP(params)
			this.setState({spSent: true})
		}

		if(this.state.oximeter.spo2>0){
			params = {}
			params = { spo2: this.state.oximeter.spo2, bpm: this.state.oximeter.bpm}
			this.props.createSPO(params);
			this.setState({tempSent: true})
		}
		this.setState({requestSent: true})
	}

	componentDidUpdate(prevProps, prevState){
		let request = []
		if(this.state.spSent && this.props.spResponse.success ){
			request.push(true)
		}
		if(this.state.bpSent && this.props.bpResponse.success ){
			request.push(true)
		}
		if(this.state.tempSent && this.props.temperatureResponse.success ){
			request.push(true)
		}

		if(this.state.spSent && this.props.spResponse.error ){
			request.push(false)
		}
		if(this.state.bpSent && this.props.bpResponse.error ){
			request.push(false)
		}
		if(this.state.tempSent && this.props.temperatureResponse.error ){
			request.push(false)
		}

		let result = request.every(entity => entity == true)

		if((this.state.spSent || this.state.bpSent || this.state.tempSent) && result){
			this.props.navigation.navigate("Home")
		}
	}


	render(){
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Temperature loading={this.state.tempLoading} mesure={this.tempMesurement} title={"Body"} value={this.state.temperature} desc={"Wear Thermometer to view Temperature"} Icon={temperatureIcon} />
			</View>
			<View style={styles.row}>
				<Blood loading={this.state.bpLoading} mesure={this.bpMesurement} value={this.state.blood} Icon={bloodPressureIcon}/>
			</View>
			<View style={styles.row}>
				<Oximeter loading={this.state.spLoading} mesure={this.spo2Mesurement} value={this.state.oximeter} Icon={oximeterIcon} />
			</View>
			<View style={styles.btnwrapper}>
				<Text disabled={!this.state.updated} onPress={this.onComplete} style={[styles.btn, this.state.updated && styles.activate]}>{this.state.requestSent ? <ActivityIndicator size="small" color="#fff"/> : "Complete"}</Text>
			</View>
		</View>
	)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		padding: 10,
		backgroundColor: "#f1f2f6",
		justifyContent: "space-between"
	},
	row: {
		flex: 0.30,
		height: 100,
		backgroundColor: "#f1f2f6"
	},
	btnwrapper: {
		height: 60
	},
	btn: {
		textAlign: "center",
		backgroundColor: "#ccc",
		fontSize: 20,
		paddingBottom: 5,
		paddingTop: 5,
		borderRadius: 5,
		color: "#ecf0f1"
	},
	activate: {
		backgroundColor: "rgba(19, 15, 64,0.7)",
		color: "#fff"
	}
})

const mapStateToProps = state => {
	return {
		bpResponse: state.createBPResponse,
		spResponse: state.createSPOResponse,
		temperatureResponse: state.createTemperatureResponse
	}
}

const mapDistpatchToProps = dispatch => {
	return {
		createBP: (params) => dispatch(createBP(params)),
		createSPO: (params) => dispatch(createSPO(params)),
		createTemperature: (params) => dispatch(createTemperature(params))
	}
}

export default connect(mapStateToProps, mapDistpatchToProps)(Measure);