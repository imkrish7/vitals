/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';




import Top from './Top';
import DatePicker from './DatePicker';
import Footer from './Footer';
import Temperature from './Temperature';
import Blood from './BloodPressure';
import Oximeter from './Oximeter';
import Cam from './Cam';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Top />
      </View>
      <View style={styles.body}>
        <View style={styles.date}>
          <DatePicker />
        </View>
        <View style={styles.items}>
          <View style={styles.row}>
            <Temperature />
            <Oximeter />
          </View>
          <View style={styles.row}>
            <Blood />
            <Cam />
          </View>
        </View>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Measure')} style={styles.floating}>
        <Text style={styles.btn}>Measure Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
  },
  body: {
    flex: 0.8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    flex: 0.15
  },
  items: {
    width: 330,
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  floating: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    right: 10,
    bottom: 10,
    backgroundColor: "rgba(189, 195, 199,1.0)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderTopColor: "#ff7979",
    borderBottomColor: "rgba(34, 166, 179,0.7)",
    borderLeftColor: "#1B1464",
    borderRightColor: "#1B1464",
  },
  btn: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff"
  }
});

export default Home;
