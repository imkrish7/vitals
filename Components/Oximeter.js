import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import * as shape from 'd3-shape';
import { oximeterForamtting } from '../utils/dataFomatting'


const Oximeter = ({data}) => {
	let formattedData = oximeterForamtting(data)
	let spo = formattedData.spo;
	let bpm = formattedData.bpm
	data = [...formattedData.data];

	const contentInset = { top: 10, bottom: 10 };
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="heart-pulse" size={30} color="#fff" />
				<Text style={styles.headerText}>Oximeter</Text>
			</View>
			<View style={styles.chart}>
				<YAxis
					data={data}
					contentInset={contentInset}
					svg={{
						fill: 'rgba(48, 51, 107,1.0)',
						fontSize: 10,
					}}
					numberOfTicks={3}
				/>
				<LineChart
					style={{ flex: 1, marginLeft: 5 }}
					data={data}
					curve={shape.curveBasis}
					animate={true}
					animationDuration={500}
					svg={{ stroke: 'rgba(48, 51, 107,1.0)', strokeLinejoin: 'bevel' }}
					contentInset={contentInset}
				/>
			</View>
			<View style={styles.summary}>
				<View style={styles.cat}>
					<Text style={styles.title}>SpO2</Text>
					<View style={styles.valWrap}>
						<Text style={styles.val}>{spo}</Text>
						<Text style={styles.unit}>%</Text>
					</View>
				</View>
				<View style={styles.cat}>
					<Text style={styles.title}>PB</Text>
					<View style={styles.valWrap}>
				<Text style={styles.val}>{bpm}</Text>
						<Text style={styles.unit}>bpm</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 200,
		backgroundColor: 'rgba(48, 51, 107,0.3)',
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
		height: 110,
		flexDirection: 'row',
	},
	summary: {
		marginTop: -20,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	valWrap: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		color: '#fff',
	},
	unit: {
		fontSize: 15,
		fontWeight: '100',
		justifyContent: 'flex-end',
		color: '#fff',
	},
	title: {
		color: '#fff',
	},
	val: {
		fontSize: 35,
		fontWeight: 'bold',
		color: '#fff',
	},
});

export default Oximeter;
