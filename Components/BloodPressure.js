import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Icon from 'react-native-vector-icons/dist/Feather'

const BloodPressure = () => {
	const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

	const contentInset = { top: 10, bottom: 10 }
	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="droplet" size={30} color="#fff"/>
				<Text style={styles.headerText}>Blood</Text>
			</View>
			<View style={styles.chart}>
			<YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={3}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 5 }}
					data={data}
					curve={shape.curveBasis}
                    svg={{ stroke: 'rgba(34, 166, 179,1)' }}
                    contentInset={contentInset}
                >
					</LineChart>
			</View>
			<View style={styles.summary}>
				<Text style={styles.summaryText}>
					<Text style={styles.max}>120</Text>/
					<Text style={styles.min}>90</Text>
				</Text>
				<Text style={styles.unit}>mmHg</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 200,
		backgroundColor: "rgba(34, 166, 179,0.2)",
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
	},
	chart: {
		width: 130,
		height: 90,
		flexDirection: "row"
	},
	summary: {
		flex: 1,
		alignItems: "center"
	},
	summaryText: {
		fontSize: 35,
		marginTop: -10,
		color: "#fff"
	},
	max: {
		position: "absolute",
		top: -20
	},
	min: {
		marginBottom: -10,
		color: "red",
		fontWeight: "500"
	},
	unit: {
		color: "#fff",
		textAlign: "right"
	}
})

export default BloodPressure;