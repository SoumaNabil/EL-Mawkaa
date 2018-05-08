import React from 'react';
import { View, Text , Image } from 'react-native';
import Profile from './components/Profile';



export default class HomeScreen extends React.Component {
  render() {
    const {main , textStyle} = Styles;
    return (
      <View style={main} >
        <Profile/>
        
      </View>
    );
  }
}

const Styles = {
  main:{
    flex:1,
    backgroundColor:'#5871B5',
    
   
  
  } ,
  textStyle:{
    marginTop: 40,
   
    
  }
  
}