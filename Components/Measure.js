import React, {useState} from 'react';
import { View, Text , StyleSheet , Button} from 'react-native';
// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Fontisto from 'react-native-vector-icons/dist/Fontisto'
import Material from 'react-native-vector-icons/dist/MaterialCommunityIcons'

import Temperature from './Cards/Temperature'
import Oximeter from './Cards/Oximeter'
import Blood from './Cards/BloodPressure'

const temperatureIcon = () => <Icon name="thermometer" size={30} color="rgba(19, 15, 64,0.7)"/>
const bloodPressureIcon = () => <Fontisto name="blood-drop" size={30} color="rgba(19, 15, 64,0.7)" />
const oximeterIcon =() => <Material name="heart-pulse" size={30} color="rgba(19, 15, 64,0.7)" />


const Measure  = () => {
	const [temperature, setTemperature] = useState("0")
	const [tempLoading, setTempLoading] = useState(false)
	const [bpLoading, setBPLoading] = useState(false)
	const [spLoading, setSPLoading] = useState(false)
	const [blood, setBlood] = useState({min: 0, max: 0})
	const [oximeter, setOximeter] = useState({spo2: 0, bpm: 0})
	const [send, setSend] = useState(false)

	const tempMesurement = () => {
		setTempLoading(true)
		let temp =Math.random() * (97 - 115) + 97.6
		let round = temp.toFixed(2)
		setTemperature(round)
		setTempLoading(false)
		setSend(true)
	}

	const bpMesurement = () => {
		setBPLoading(true)
		let minBP = Math.ceil(Math.random() * 100 + 60)
		let maxBP = Math.ceil(Math.random() * (120 - 180) + 120)
		setBlood({min: minBP, max: maxBP})
		setBPLoading(false)
	}

	const spo2Mesurement = () => {
		setSPLoading(true)
		let spo2 = Math.ceil(Math.random() * (90-100) + 90)
		let bpm = Math.ceil(Math.random() * (60-100) + 60)
		setOximeter({spo2, bpm})
		setSPLoading(false)
	}

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Temperature loading={tempLoading} mesure={tempMesurement} title={"Body"} value={temperature} desc={"Wear Thermometer to view Temperature"} Icon={temperatureIcon} />
			</View>
			<View style={styles.row}>
				<Blood loading={bpLoading} mesure={bpMesurement} value={blood} Icon={bloodPressureIcon}/>
			</View>
			<View style={styles.row}>
				<Oximeter loading={spLoading} mesure={spo2Mesurement} value={oximeter} Icon={oximeterIcon} />
			</View>
			<View style={styles.btnwrapper}>
				<Button disabled={!send} title="Complete" color="#1B1464"/>
			</View>
		</View>
	)
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
	}
})
export default Measure;