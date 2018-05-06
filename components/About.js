import React from 'react';
import { View, Text } from 'react-native';
import {Card,CardSection} from  './common';

import {Header} from './common';



export default class About extends React.Component {



  render() {
    
    const {main , headerText , addressStyle, pointsStyle} = Styles;
    return (
      <View style={main} >
        <Text style={headerText} >Address</Text>
        <Text style={addressStyle} >Adress goes here cairo Egpt</Text>
        <Text style={headerText} > Points </Text>
        <Text style={pointsStyle} > 34,400 </Text>
      </View>
    )
  }
}

const Styles = {
  main:{
    flex:1, 
    height:700,
    backgroundColor:'#935CAE' 
  }   ,

  headerText:{
      fontSize: 22,
      color:'#FCFE80',
      marginTop:20,
      marginLeft: 20,
      fontWeight: '800',
  } ,
  addressStyle:{
      color:'white',
      fontSize:14 ,
      marginTop:15,
      marginLeft:20
  } ,
  pointsStyle:{
      color:'white',
      fontSize:34 ,
      marginTop:15,
      marginLeft:20,
      fontWeight:'800'
  }
}
