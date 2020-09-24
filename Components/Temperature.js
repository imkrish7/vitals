import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
const Temperature = () => {

	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="thermometer-empty" size={30} color="#fff"/>
				<Text style={styles.headerText}>Temperature</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 130,
		backgroundColor: "#ff7979",
		borderRadius: 15,
		padding: 5
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

export default Temperature;