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
  Text, ImageBackground
} from 'react-native';

import Top from './Components/Top';
import DatePicker from './Components/DatePicker';
import Footer from './Components/Footer';
import Temperature from './Components/Temperature';
import Blood from './Components/BloodPressure';
import Oximeter from './Components/Oximeter';
import Cam from './Components/Cam';

const App: () => React$Node = () => {
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
      <View style={styles.footer}>
        <Footer />
      </View>
      <TouchableOpacity style={styles.floating}>
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
    flex: 0.72,
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
    bottom: 60,
    backgroundColor: "rgba(241, 242, 246,1.0)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 90,
    height: 90,
    fontSize: 15
  },
  footer: {
    flex: 0.08,
  },
});

export default App;
