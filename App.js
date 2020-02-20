/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*Example of Reac Native Life Cycle*/
import React, { Component } from 'react';
import { Image,Text, View, StyleSheet } from 'react-native';
 
class CustomComponent extends Component {
  constructor() {
    super();
    console.log('Constructor Called.');
  }
 
  componentWillMount() {
    console.log('componentWillMount called.');
  }
 
  componentDidMount() {
    console.log('componentDidMount called.');
  }
 
  componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.', nextProp);
  }
 
  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }
 
  componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate called.');
  }
 
  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
  }
 
  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }
 
  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
  }
 
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Language is: {this.props.name}</Text>
      </View>
    );
  }
}
 
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center',flexDirection: 'row',flexWrap:'wrap' }}>
        <Image source={require('./img/aajtak_new.jpg')} style={styles.image} />
        <Image source={require('./img/aajtak_new.jpg')} />
        <Image source={require('./img/aajtak_new.jpg')} />
        <Image source={require('./img/aajtak_new.jpg')} />
        <Image source={require('./img/aajtak_new.jpg')} />
        <Image source={require('./img/aajtak_new.jpg')} />
      </View>
    );
  }
}


const styles=StyleSheet.create({
  image:{
    width:100,
    height:100,
  },
});














/*

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MyForm from './MyForm';



const App: () => React$Node = () => {
  return (
    <>
    <MyForm />
    <Text> Hi This is testing1</Text>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>

      
    </>

    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/