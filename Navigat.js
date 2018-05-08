import React from 'react';
import { View, Text , Image } from 'react-native';
import Profile from './components/Profile';
import BidingMain from './components/BidingMain';
import { StackNavigator , TabNavigator , TabBarBottom} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Navigat = 
  TabNavigator(
    {
      Profile: { screen: Profile },
      BidingMain: { screen: BidingMain }
      
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Profile') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'BidingMain') {
            iconName = `ios-partly-sunny${focused ? '' : '-outline'}`;
          }else if (routeName === "Info") {
            iconName = `ios-information-circle`;
          }else if (routeName === "Products"){
            iconName = 'ios-photos';
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#935CAE',
        inactiveTintColor: '#5871B5',
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
    }
  );
  


export default  Navigat;
