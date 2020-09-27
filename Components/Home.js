/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect  } from 'react-redux';

import Top from './Top';
import DatePicker from './DatePicker';
import Temperature from './Temperature';
import Blood from './BloodPressure';
import Oximeter from './Oximeter';
import Cam from './Cam';
// actions
import { getBP, getSPO, getTemperature} from '../actions/userActions'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      bp: [],
      spo: [],
      temperature: [],
      date: new Date().toISOString()
    }
  }

  componentDidMount(){
    const date = new Date(Date.now()).toLocaleDateString()
    const { navigation } = this.props;
    this.extractData(date)
    this.focusListener = navigation.addListener('focus',()=>{
      this.extractData(date)
    });
  }

  extractData = (date) => {
    const params = { date }
    this.props.getBP(params)
    this.props.getSPO(params)
    this.props.getTemperature(params)
  }

  compare = (prevProps, currentProps) => {
      if(prevProps && currentProps && currentProps.success && currentProps.data && currentProps.data != prevProps.data ){
        return true
      }
      return false;
  }

  componentDidUpdate(prevProps, prevState){
    if(this.compare(prevProps.bpResponse, this.props.bpResponse)){
      this.setState({bp: [...this.props.bpResponse.data.data]})
    }
    if(this.compare(prevProps.spoResponse, this.props.spoResponse)){
      this.setState({spo: [...this.props.spoResponse.data.data]})
    }
    if(this.compare(prevProps.temperatureResponse, this.props.temperatureResponse)){
      this.setState({temperature: [...this.props.temperatureResponse.data.data]})
    }
  }

  selectDate = (date) => {
      date = new Date(date).toLocaleDateString()
      this.extractData(date);
  }

  componentWillUnmount(){
    this.focusListener()
    this.setState({bp: [], spo: [], temperature: [] })
  }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Top />
      </View>
      <View style={styles.body}>
        <View style={styles.date}>
          <DatePicker selectDate={this.selectDate} date={this.state.date} />
        </View>
        <View style={styles.items}>
          <View style={styles.row}>
          <View style={styles.col}>
            <Temperature data={this.state.temperature} />
            <Oximeter data={this.state.spo} />
          </View>
          <View style={styles.col}>
            <Blood data={this.state.bp} />
            <Cam />
          </View>
          </View>
        </View>
      </View>    
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Measure')} style={styles.floating}>
        <Text style={styles.btn}>Measure Now</Text>
      </TouchableOpacity>
    </View>
  );
  }
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
    flexDirection: "row",
    justifyContent: "center"
  },
  col: {
    flex: 0.5,
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

const mapStateToProps = state =>{
  return {
    bpResponse: state.getBPResponse,
    temperatureResponse: state.getTemperatureResponse,
    spoResponse: state.getSPOResponse
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBP: params => dispatch(getBP(params)),
    getSPO: params => dispatch(getSPO(params)),
    getTemperature: params => dispatch(getTemperature(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
