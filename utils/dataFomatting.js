// Formating for graph

// Temperature
export const temperatureForamtting = data => {
	let result = [];
	let dataClone = data.slice(); // to stop mutation
	let sum = 0;
	let average = null;
	if (data.length > 0) {
		result = dataClone.map(temp => {
			let tempFloat = parseFloat(temp.temperature);
			sum += tempFloat;
			return tempFloat;
		});
		let totalData = result.length;
		average = (sum / totalData).toFixed(2);
		return { average, data: result };
	} else {
		return { average: 97.5, data: [] };
	}
};

// Oximeter
export const oximeterForamtting = data => {
	let result = [];
	let dataClone = data.slice(); // to stop mutation
	let bpmSum = 0;
	let bpmAvg = null;
	let spoAvg = null;
	let spoSum = 0;
	if (data.length > 0) {
		result = dataClone.map(oxi => {
			let bpmInt = parseInt(oxi.bpm);
			let spoInt = parseInt(oxi.spo2);
			bpmSum += bpmInt;
			spoSum += spoInt;
			return bpmInt;
		});
		let totalData = result.length;
		bpmAvg = Math.ceil(bpmSum / totalData);
		spoAvg = Math.ceil(spoSum / totalData);
		return { spo: spoAvg, bpm: bpmAvg, data: result };
	} else {
		return { spo: 96, bpm: 60, data: [] };
	}
};

// Blood Pressure
export const bloodForamtting = data => {
	let result = [];
	let dataClone = data.slice(); // to stop mutation
	let minSum = 0;
	let minAvg = null;
	let maxAvg = null;
	let maxSum = 0;
	if (data.length > 0) {
		result = dataClone.map(blood => {
			let minInt = parseInt(blood.min);
			let maxInt = parseInt(blood.max);
			let avg = Math.ceil((maxInt + minInt) / 2);
			minSum += minInt;
			maxSum += maxInt;
			return avg;
		});
		let totalData = result.length;
		minAvg = Math.ceil(minSum / totalData);
		maxAvg = Math.ceil(maxSum / totalData);
		return { min: minAvg, max: maxAvg, data: result };
	} else {
		return { min: 90, max: 110, data: [] };
	}
};
