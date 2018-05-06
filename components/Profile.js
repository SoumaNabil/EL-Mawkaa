import React from 'react';
import { View, Text } from 'react-native';
import Head from './Head';
import Nav from './Nav';
import SelectedSection from './SelectedSection';

import {Header} from './common';



export default class HomeScreen extends React.Component {
  state = {
    selectedScreen:"Wall"
  }
 
  render() {
    const {main , textStyle} = Styles;
    return (
      <View style={main} >
        <Head/>   
        <Nav selectedScreen ={(selectedScreen)=>{this.setState({selectedScreen})}} />
        <SelectedSection screen={this.state.selectedScreen}/>
      </View>
    )
  }
}

const Styles = {
  main:{
    flex:1,  
  }   
}
