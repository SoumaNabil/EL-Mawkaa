import React, { Component } from 'react';
import { Text } from 'react-native';
import  firebase from 'firebase'; // 4.13.1
import  Expo  from 'expo';
import SignUpfFacebook from './signUpfFacebook';
import SignUPGoogle from './SignUPGoogle';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBQ_-jsUSXsaFg5r1q7FipPFITRAuUxfKc",
      authDomain: "signup-167fb.firebaseapp.com",
      databaseURL: "https://signup-167fb.firebaseio.com",
      projectId: "signup-167fb",
      storageBucket: "signup-167fb.appspot.com",
      messagingSenderId: "975217707003"
    });
    
  }
 
 
  render(){ 
    return (
      <View >
        <SignUPGoogle/>
        <Text>
        or
        </Text>
        <SignUpfFacebook/>
        </View>
    );
  }
}

