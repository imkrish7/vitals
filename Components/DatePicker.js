import React, {useState} from 'react';
import { View , StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';



const DatePicker = () => {

  const [items, setItems] = useState({});

	return (
	<View style={styles.container}>
    <CalendarStrip
      scrollable
      style={styles.calendar}
      showDate={true}
      showMonth={false}
      iconLeft={null}
      iconRight={null}
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
    height: 90,
		borderRadius: 10, 
		zIndex: 1,
    backgroundColor: "rgba(236, 240, 241,1)",
    color: "#ccc",
    fontSize: 20
	}
})

export default DatePicker;