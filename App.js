// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import TourScreen from './screens/tour'
// import { StackNavigator } from 'react-navigation';

// // export default class App extends React.Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Tour />
// //       </View>
// //     );
// //   }
// // }





import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TourScreen from './screens/tour';
import SignupScreen from './screens/signup';
import LoginScreen from './screens/login';


export default class App extends React.Component {
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
    },
    Signup:{
      screen: SignupScreen,
    },
    Login:{
      screen: LoginScreen,
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
