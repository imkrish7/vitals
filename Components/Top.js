import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import moment from 'moment';

const Top = () => {
	return(
		<View style={Styles.container}>
			<View style={Styles.header}>
				<View style={Styles.ham}>
					<View style={Styles.line} />
					<View style={Styles.line} />
					<View style={Styles.half} />
				</View>
				<Text style={Styles.headerText}>Vitals</Text>
				<Text>
					<Icon name="plus" size={25} color="#fff"></Icon>
				</Text>
			</View>
			<Text style={Styles.date}>
				{moment().format("MMM D, YYYY")}
			</Text>
			<Text style={Styles.text}>
				How are you feeling today?
			</Text>
		</View>
	)
}

const Styles = StyleSheet.create({
	container: {
		backgroundColor: "#1B1464",
		padding: 10,
		flex: 1,
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15
	},

	header: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	ham: {
		width: 40,
		height: 30
	},
	line: {
		width: 30,
		height: 5,
		backgroundColor: "#fff",
		borderRadius: 2,
		margin: 2 
	},
	half: {
		width: 20,
		height: 5,
		backgroundColor: "#fff",
		borderRadius: 2,
		margin: 2 
	},
	date: {
		flex: 1,
		color: "#fff"
	},
	text:{
		flex: 1,
		color: "#fff",
		fontSize: 20
	},
	headerText: {
		textAlign: "center",
		fontSize: 18,
		color: "#fff"
	}
})

export default Top;