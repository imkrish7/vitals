import React, {useState, useEffect} from 'react';
import { View , StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';



const DatePicker = ({ selectDate, date }) => {
  const [isDateSelected, setIsDateSelected] = useState(false);
  let markedDatesArray = [{date: date, dots: [{ color: "blue" }]}]
  
  const onDateSelect = (date) => {
    setIsDateSelected(true)
    selectDate(date)
  }

  useEffect(() => {
    if(isDateSelected){
      setIsDateSelected(false)
    }
  })

	return (
	<View style={styles.container}>
    <CalendarStrip
      scrollable={true}
      daySelectionAnimation={{type: 'border',duration: 200, borderWidth: 1, borderHighlightColor: '#000'}}
      style={styles.calendar}
      calendarHeaderStyle={{color: '#718093'}}
      highlightDateNumberStyle={styles.select}
      highlightDateNameStyle={styles.select}
      markedDates={markedDatesArray}
      dateNumberStyle={[styles.date]}
      dateNameStyle={[styles.date]}
      markedDatesStyle={{ color: "#000" }}
      showDate={true}
      showMonth={true}
      iconLeft={null}
      iconRight={null}
      onDateSelected={onDateSelect}
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
    paddingLeft: 10,
    paddingRight: 10,
		zIndex: 1,
    backgroundColor: "rgba(236, 240, 241,1)",
    color: "#ccc",
    fontSize: 20
  },
  date: {
    color: '#718093',
    fontSize: 10
  },
  select: {
    color: "#000"
  }
})

export default DatePicker;