import React from 'react';
import { View, Text ,ScrollView } from 'react-native';
import Wall from './Wall';
import About from './About';
import Project from './Project';
import {Header} from './common';



export default class selectedScreen extends React.Component {

  state = {
    selectedScreen: this.props.screen 
  }

  renderScreen(){
    if(this.props.screen === 'Wall'){
      return(<Wall/>)
    }
    else if(this.props.screen === 'About'){
      return(<About/>)
    }
    else if(this.props.screen === 'Project'){
      return(<Project/>)
    }
  }

  render() {
    
    const {main , textStyle} = Styles;
    return (
      <View style={main} >
        <ScrollView>
        
       {this.renderScreen()}
        
        </ScrollView>
      </View>
    )
  }
}

const Styles = {
  main:{
    flex:9, 
   
  }   
}
