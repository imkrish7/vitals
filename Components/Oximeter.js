import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
const Oximeter = () => {

	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="heart-pulse" size={30} color="#fff"/>
				<Text style={styles.headerText}>Oximeter</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 200,
		backgroundColor: "#1B1464",
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

export default Oximeter;