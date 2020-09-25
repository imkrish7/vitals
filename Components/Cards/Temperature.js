import React, {useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Material from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const Temperature = ({title, Icon, desc, value, mesure, loading}) => {
	const [loadingCompleted, setLodingCompleted] = useState(false)
	const loadData = () => {
		mesure()
		setLodingCompleted(true)
	}
	return (
		<View onStartShouldSetResponder={loadData} style={styles.container}>
			<View style={[styles.col, styles.header]}>
				<Icon />
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={[styles.col, styles.load ]}>
				<View style={[styles.desc, loadingCompleted && styles.none ]}>
					<Text style={styles.text}>{desc}</Text>
				</View>
				<View style={styles.value}>
					<Text style={styles.valueText}>{loading ? <ActivityIndicator size="large" color="#0000ff"/> : value}</Text>
					<Material name="temperature-fahrenheit" size={15} color="rgba(19, 15, 64,0.7)"/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		borderRadius: 5
	},
	col: {
		flex: 0.5,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: "rgba(189, 195, 199,0.3)",
	},
	load: {
		flex: 1,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5
	},
	header: {
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		padding: 5
	},
	desc: {
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		flex: 1,
		backgroundColor: "rgba(19, 15, 64,0.7)",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		padding: 10,
		borderRadius: 10,
		zIndex: 1
	},
	value: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
		padding: 10
	},
	valueText: {
		fontSize: 55,
		color: "rgba(19, 15, 64,0.7)",
		fontWeight: "bold"
	},
	text: {
		color: "#fff",
		fontSize: 15,
		textAlign: "center"
	},
	none: {
		opacity: 0
	},	
	title: {
		fontSize: 20
	}
})

export default Temperature;