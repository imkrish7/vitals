import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign'
const Cam = () => {

	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="camerao" size={30} color="#fff"/>
				<Text style={styles.headerText}>facexxxxx</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 130,
		backgroundColor: "#ccc",
		borderRadius: 15,
		flex: 0.93,
		justifyContent: "center",
		alignItems: "center"
	},
	header: {
		textAlign: "center",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	headerText: {
		color: "#fff",
		fontSize: 15
	}
})

export default Cam;