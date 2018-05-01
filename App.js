import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'; 
import ConnectWithGoogleButton from './ConnectWithGoogleButton'; 
export default class App extends Component {
  render() {
    const { BackGroundColorStyle } = styles;
    return (
      <View style={BackGroundColorStyle}>
        <Header headerText={'Login'} />
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </View>
    );
  }
}

const styles = {
  BackGroundColorStyle: {
    backgroundColor: '#5871B5',
    flex: 1
  
}
};