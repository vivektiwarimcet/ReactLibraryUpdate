//This is an example to get the Device Information// 
import React, { Component } from 'react';
//import react in our code. 
 import { Platform, StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
//import all the components we are going to use.
 import DeviceInfo from 'react-native-device-info';
//import DeviceInfo which will help to get UniqueId
 
export default class App extends Component {
  deviceInfo1=[];
  constructor() {
    super();
    this.state = {
      deviceInfo:[]
    };
  }
  componentDidMount() {
    var deviceInfo1=[];
   
    deviceInfo1[0] = 'getBuildNumber:  ' + DeviceInfo.getBuildNumber();
    deviceInfo1[1] = 'getBuildNumberNext:  ' + DeviceInfo.getBuildNumberNext();
    //alert('deviceInfo1'+deviceInfo1);
    this.setState({deviceInfo : deviceInfo1});
  }
  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.MainContainer}>
        {this.state.deviceInfo.map((item, key) => (
          <View key={key} style={styles.item}>
            <Text style={styles.text}>{item}</Text>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 30 : 20,
    backgroundColor:'white'
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '90%',
    backgroundColor: '#646464',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#707080',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
});