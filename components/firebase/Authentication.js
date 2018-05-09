import React, { Component } from 'react';
import { Text } from 'react-native';
import SignUpfFacebook from './SignUpfFacebook';
import SignUPGoogle from './SignUPGoogle';

export default class Authentication extends Component {
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

