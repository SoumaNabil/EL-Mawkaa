import React, { Component } from 'react';
import { Text } from 'react-native';
import SignUpfFacebook from './signUpfFacebook';
import SignUPGoogle from './SignUPGoogle';

export default class App extends Component {
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

