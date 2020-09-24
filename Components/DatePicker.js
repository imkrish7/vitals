import React, {useState} from 'react';
import { View , StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';

const timeToString = (time) => {
	const date = new Date(time);
	return date.toISOString().split('T')[0];
  };


const DatePicker = () => {

  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

	return (
	<View style={styles.container}>
      <Agenda
		items={items}
		style={styles.calendar}
      />
    </View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		flex: 1,
		justifyContent: "center",
		marginTop: -20,
    flexBasis: 1,  
	},
	calendar: {
    width: 330,
		borderRadius: 10, 
		zIndex: 1,
    backgroundColor: "#ccc",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 2
	}
})

export default DatePicker;