import React from 'react';
import { View, Text ,ScrollView ,Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Card ,CardSection , Button2 , Button3 } from './common';


export default class Project extends React.Component {



    render() {
      
      const {main , projectRow , projectSingle , projectName , nameText , ButtonsStyle} = Styles;
      return (
        <View style={main} >

            <View style={projectRow} >

                <View style={projectSingle}>
                    <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                    <View style={projectName}>
                        <Text style={nameText} >Sample Building</Text>
                    </View>
                </View>

                <View style={projectSingle}>
                    <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                    <View style={projectName} >
                        <Text style={nameText} >Sample Building</Text>
                    </View>
                </View>

            </View>




            <View style={projectRow} >

                    <View style={projectSingle}>
                        <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                        <View style={projectName}>
                            <Text style={nameText} >Sample Building</Text>
                        </View>
                    </View>

                    <View style={projectSingle}>
                        <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                        <View style={projectName} >
                            <Text style={nameText} >Sample Building</Text>
                        </View>
                    </View>

            </View>

                <View style={projectRow} >

                    <View style={projectSingle}>
                        <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                        <View style={projectName}>
                            <Text style={nameText} >Sample Building</Text>
                        </View>
                    </View>

                    <View style={projectSingle}>
                        <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                        <View style={projectName} >
                            <Text style={nameText} >Sample Building</Text>
                        </View>
                    </View>

                </View>




                <View style={projectRow} >

                    <View style={projectSingle}>
                        <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                        <View style={projectName}>
                            <Text style={nameText} >Sample Building</Text>
                        </View>
                    </View>

                    <View style={projectSingle}>
                        <Image style={{height:134}}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48OZA7BDiwcUyZ46ukThVx9rP4cfNI2rvrJuuTa4GqtHe5nmEDA'}}/>

                        <View style={projectName} >
                            <Text style={nameText} >Sample Building</Text>
                        </View>
                    </View>

                </View>


            <View style = {ButtonsStyle} >
                <Button2>
                    Call
                </Button2>

                <Button3>
                    Contact
                </Button3>
            </View>



            

        </View>
      )
    }
  }

  Styles={
      main:
      {
      flex:1,
      backgroundColor:'#935CAE'
      } ,
      projectRow:{
          flex:1,
          borderWidth: 2,
          borderColor: '#935CAE',
          flexDirection: 'row',
          justifyContent:'flex-end'
      } ,
      projectSingle:{
          flex:1,
          
          borderWidth:1,
          borderColor:'#935CAE'
      },
      projectName:{
          flex:1,
          justifyContent:"center",
          alignItems: 'center',
          height:58,
          backgroundColor:'white',
      },
      nameText:{
          fontSize: 13,
          fontWeight: '600',
      },
      ButtonsStyle:{
          flexDirection:'row',
          justifyContent:'space-around'
      }
      

  }