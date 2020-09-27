import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as shape from 'd3-shape'
import Material from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// formating data
import { temperatureForamtting } from '../utils/dataFomatting';

const Temperature = ({data}) => {
	let formattedData = temperatureForamtting(data)
	let average = formattedData.average;
	data = [...formattedData.data]
	const contentInset = { top: 10, bottom: 10 }
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="thermometer-empty" size={30} color="#fff" />
				<Text style={styles.headerText}>Temperature</Text>
			</View>
			<View style={styles.chart}>
			<YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'rgb(255, 0, 0)',
                        fontSize: 10,
                    }}
                    numberOfTicks={3}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 5 }}
                    data={data}
					svg={{ stroke: 'rgb(255, 0, 0)' }}
					curve={shape.curveBasis}
                    contentInset={contentInset}
                >
					</LineChart>
			</View>
			<View style={styles.summery}>
				<Text style={styles.textWrapper}><Text style={styles.tempText}>{average}</Text><Material name="temperature-fahrenheit" size={15} color="#fff"/></Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 130,
		backgroundColor: 'rgba(255, 0, 0, 0.2)',
		borderRadius: 15,
		padding: 5,
	},
	header: {
		flexDirection: 'row',
		padding: 5,
	},
	headerText: {
		color: '#fff',
		fontSize: 15,
	},
	chart: {
		width: 130,
		height: 60,
		flexDirection: "row"
	},
	summery: {
		marginTop: -20
	},
	textWrapper: {
		textAlign: "center"
	},
	tempText: {
		fontSize: 35,
		color: "#fff"
	}
});

export default Temperature;
