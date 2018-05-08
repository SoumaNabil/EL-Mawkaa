import React from 'react';
import { View, Text , Image } from 'react-native';



import { StackNavigator , TabNavigator , TabBarBottom} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RootStack from './RootStack';


class NavigatPB extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RootStack/>
      </View>
    );
  }
}  


export default  NavigatPB;
