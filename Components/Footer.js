import React from 'react';
import { View, StyleSheet} from 'react-native'
import Ionicon from 'react-native-vector-icons/dist/Ionicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto'
import Material from 'react-native-vector-icons/dist/MaterialIcons'

const Footer = () => {
	return(
		<View style={styles.container}>
			<Ionicon name="home" size={25} color="#ccc" />
			<Material name="analytics" size={25} color="#1B1464" />
			<Fontisto name="doctor" size={25} color="#ccc" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		backgroundColor: "#fff",
		flexDirection: "row",
		paddingTop: 5,
		justifyContent: "space-around",
		borderTopWidth: 2,
		borderTopColor: "#eee",
		borderStyle: "solid" 
	}
})

export default Footer;