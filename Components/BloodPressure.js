import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Feather'
const BloodPressure = () => {

	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="droplet" size={30} color="#fff"/>
				<Text style={styles.headerText}>Blood</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 200,
		backgroundColor: "rgba(34, 166, 179,0.7)",
		borderRadius: 15,
		padding: 5,
		backfaceVisibility: "visible"
	},
	header: {
		flexDirection: "row",
		padding: 5
	},
	headerText: {
		color: "#fff",
		fontSize: 15
	}
})

export default BloodPressure;