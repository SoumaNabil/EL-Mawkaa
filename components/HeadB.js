import React from 'react';
import {Input} from './common';
import { Text , View , TextInput , Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import InfoIcon from './assets/info-ico.png';

export default class HeadB extends React.Component{


    render(){
        const {inputStyle,main,inputFrame,imageFrame,avatarStyle} = Styles ;

        return(
            <View style={main}>
                

                <View style={avatarStyle} >
                    <Avatar  
                        small
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        />
                </View>

                <View style={inputFrame} >                
                    <TextInput value='Search' style={inputStyle} />

                </View>
                <View style={imageFrame} >
                    <Image source={InfoIcon} style={{height:27}} />
                </View>

            </View>
        )
    }
}
const Styles = {

    inputStyle: {
        color: 'black',
        
        fontSize: 20,
        paddingLeft:70 ,
        paddingTop:3
       
    },
    main:{
        flex:1,
        flexDirection: 'row',

        paddingTop:40
    },
    inputFrame:{
        flex:3,
        backgroundColor:'#E8E9EA',
        height:32,
        borderRadius: 30,
        marginLeft:23,
        marginTop:10,
        alignSelf: 'stretch',
        
    },imageFrame:{
        flex:1,
        paddingLeft:22,
        paddingTop:10
        
        
    },avatarStyle:{
        marginLeft:25,
        marginTop: 8,
    }

}
