import React from 'react';
import { View, Text } from 'react-native';


import {Button} from './common';



export default class HomeScreen extends React.Component {
  
    state={
      wallB:true,
      aboutB:false,
      projectB:false,
      moreB:false
    }

  render() {
    const {main , textStyle} = Styles;
    
    return (
      <View style={main} >
        <Button onPress={()=>{this.props.selectedScreen('Wall');
                            this.setState({wallB:true,
                            aboutB:false, projectB:false ,moreB:false })}} Bstate = {this.state.wallB} >  
            Wall
        </Button>
        <Button onPress={()=>{this.props.selectedScreen('About');
                           this.setState({wallB:false,
                            aboutB:true, projectB:false, moreB:false })}} Bstate = {this.state.aboutB}> 
            About
        </Button>
        <Button onPress={()=>{this.props.selectedScreen('Project');
                                this.setState({wallB:false,
                                  aboutB:false, projectB:true , moreB:false })}} Bstate = {this.state.projectB} >
            Project
        </Button>

        <Button onPress={()=>{this.props.selectedScreen('More');
                                this.setState({wallB:false,
                                  aboutB:false, projectB:false , moreB:true})}} Bstate = {this.state.moreB} > 
        More
        </Button>
      
      </View>
    )
  }
}

const Styles = {
  main:{
    flex:1, 
    backgroundColor:'#935CAE' ,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }   
}
