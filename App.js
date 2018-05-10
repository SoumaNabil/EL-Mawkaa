import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  firebase from 'firebase'; // 4.13.1
import TourScreen from './components/Tour';
import SignupScreen from './components/Signup';
import LoginScreen from './components/Login';
import HomeScreen from './components/Profile'


export default class App extends React.Component {

componentWillMount() {
  var config = {
    apiKey: "AIzaSyBB0EId0d4mgCu49hNBDNahSpnuqknKias",
    authDomain: "el-mawkaa-e4023.firebaseapp.com",
    databaseURL: "https://el-mawkaa-e4023.firebaseio.com",
    projectId: "el-mawkaa-e4023",
    storageBucket: "el-mawkaa-e4023.appspot.com",
    messagingSenderId: "705455741656"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator(
  {
    Tour: {
      screen: TourScreen,
      title: 'Tour'
    },
    Signup:{
      screen: SignupScreen,
      title: 'Signup'
    },
    Login:{
      screen: LoginScreen,
      title: 'Login'
    },
    Profile:{
      screen: HomeScreen,
      title: 'Profile'
    }
  },
  {
  navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        height: 40
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        justifyContent: 'center',
        marginLeft: '35%'
      }
    }
   }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});