import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateBid from './components/CreateBid';
import Tour from './components/tour';
import BidingMain from './components/BidingMain';
//import LoginForm from './components/LoginForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tour/> 
        <CreateBid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});