import React from 'react';
import { View, Text } from 'react-native';
import {Avatar} from 'react-native-elements';

import {Header} from './common';



export default class HomeScreen extends React.Component {
  render() {
    const {main , nameText , jobTitleText , AvatarStyle , propertiesStyle , propertyStyle,propNumber,propName,headTop, userInfo }  = Styles;
    return (
      <View style={main} >
            <View style = {headTop}>
                
                    <View style={userInfo} >
                        <Text style={nameText} >
                            Ebrahim Anwar
                        </Text> 

                        <Text style={jobTitleText} >
                            COO & Co-Founder at handaz
                        </Text>
                    </View>

                    <View style={AvatarStyle} >
                        <Avatar
                            
                            large
                            rounded
                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            />

                    </View>
            </View>

            <View style = {propertiesStyle}>

                <View style={propertyStyle} >
                    <Text  style={propNumber}>500</Text>
                    <Text style={propName}>Project</Text>  
                </View>

                <View style={propertyStyle}>
                    <Text style={propNumber}>400</Text>
                    <Text style={propName}>Followers</Text>
                </View>

                <View style={propertyStyle}>
                    <Text style={propNumber}>300</Text>
                    <Text style={propName}>Following</Text>
                </View>

    
            </View>
       
      
      </View>
    )
  }
}

const Styles = {
    AvatarStyle:{
        marginTop:10, 
        
    },
    nameText:{
        fontSize:32,
        
        color:'white'
    },
    jobTitleText:{
        fontSize:12,
        color:"white"
    },
  main:{
    flex:4, 
   
    backgroundColor:'#5871B5' ,
   
    justifyContent:"center",
    alignItems: 'flex-start'
  }   
  ,
  propertiesStyle:{
    width:'100%',
    
    marginTop:10,
    backgroundColor:'#5871B5' ,
    flexDirection: 'row',
    justifyContent:'space-around',
    
  },
  propertyStyle:{
     
    

  },
  propNumber:{
      color: '#FEE180',
      fontSize:25
  }
  ,
  propName:{
      fontSize:11,
      color:'#FEE180'
  },
  headTop:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:'100%'
  },
  userInfo:{
    marginTop: 15
  }
}
