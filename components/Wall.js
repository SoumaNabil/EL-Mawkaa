import React from 'react';
import { View, Text ,ScrollView ,Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Card ,CardSection } from './common';



export default class Wall extends React.Component {
  render() {
    const {main , wallItemText, nameText , titleText, dateStyle} = Styles;
    return (
      <View style={main} >  
        <Card>
            
                <CardSection>
                    <Avatar
                    
                    large
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />

                    <View style= {wallItemText} >
                        <Text style={nameText} >Ebrahin anwar</Text>     
                        <Text style={titleText} >Job title</Text>
                        <Text style={dateStyle} >month/day/year</Text>
                    </View>
            

                </CardSection>

                <CardSection>
                    <Text>
                        ksdfhjasjflakjsdfka  alksdflasjdhfl a;kdlsflasdhfladsf adslfasjdfhal jSDFA KAJSDF AJSDF alksdflasjdhflKJA
                        AJHDFJA A,SDF ASDFJABSDF AJSDF A,SDBFAJDSBF ADSJFBB ASD AKJSDBF ASJK 
                    </Text>
                </CardSection>

                <CardSection>
                <Image style={{height:200,flex:2}}  source={{uri:'https://www.mlmgroup.com/wp-content/uploads/2017/03/services-buildings-mlm.jpg'}}/>
                </CardSection>
   
            
        </Card>
        <Card>
            
            <CardSection>
                <Avatar
                
                large
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                />

                <View style= {wallItemText} >
                    <Text style={nameText} >Ebrahin anwar</Text>     
                    <Text style={titleText} >Job title</Text>
                    <Text style={dateStyle} >month/day/year</Text>
                </View>
        

            </CardSection>

            <CardSection>
                <Text>
                    ksdfhjasjflakjsdfka  alksdflasjdhfl a;kdlsflasdhfladsf adslfasjdfhal jSDFA KAJSDF AJSDF alksdflasjdhflKJA
                    AJHDFJA A,SDF ASDFJABSDF AJSDF A,SDBFAJDSBF ADSJFBB ASD AKJSDBF ASJK 
                </Text>
            </CardSection>

            <CardSection>
            <Image style={{height:200,flex:2}}  source={{uri:'https://www.mlmgroup.com/wp-content/uploads/2017/03/services-buildings-mlm.jpg'}}/>
            </CardSection>

        
    </Card>
    <Card>
            
            <CardSection>
                <Avatar
                
                large
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                />

                <View style= {wallItemText} >
                    <Text style={nameText} >Ebrahin anwar</Text>     
                    <Text style={titleText} >Job title</Text>
                    <Text style={dateStyle} >month/day/year</Text>
                </View>
        

            </CardSection>

            <CardSection>
                <Text>
                    ksdfhjasjflakjsdfka  alksdflasjdhfl a;kdlsflasdhfladsf adslfasjdfhal jSDFA KAJSDF AJSDF alksdflasjdhflKJA
                    AJHDFJA A,SDF ASDFJABSDF AJSDF A,SDBFAJDSBF ADSJFBB ASD AKJSDBF ASJK 
                </Text>
            </CardSection>

            <CardSection>
            <Image style={{height:200,flex:2}}  source={{uri:'https://www.mlmgroup.com/wp-content/uploads/2017/03/services-buildings-mlm.jpg'}}/>
            </CardSection>

        
    </Card>

      </View>
    )
  }
}

const Styles = {
  main:{
    flex:1, 
    backgroundColor:'white' 
  },
  wallItemText:{
      marginLeft: 10,
      marginTop: 10,

  }  
  ,
  nameText:{
      fontSize: 12,

  } ,
  titleText:{
      fontSize:9,
      color:'#5871B5'
      
  },
  dateStyle:{
      color:'#935CAE',
      fontSize:9
  }
}
