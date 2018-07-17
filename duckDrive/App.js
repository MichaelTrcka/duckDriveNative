/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Header from './src/components/Header';
import List from './src/components/List';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Duck Drive'} />
        <View style={styles.welcomeView}>
          <Text style={styles.welcome}> Welcome to the Duck Drive App </Text>
        </View>
        <Text style={styles.instructions}>To get started, find your Duck</Text>
        <List />
        <Button
          title="Turn On Your Duck"
          color="#841584"
          style={styles.button}
        />
        <Button
          title="Turn Off Your Duck"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1cac2',
  },
  welcomeView:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
