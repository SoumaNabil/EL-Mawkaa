import React from 'react';
import {Text , View , Image ,Picker} from 'react-native';
import {Card ,CardSection , Button2 , Button3 } from './common';


export default class FilterPicer extends React.Component {

    render(){
        const {main} = Styles ;
        return(
            <View style={main} >
                


            </View>
        )
    }
}

const Styles = {
    main:{    
        flex:1,  
        flexDirection:'row',
        backgroundColor:'blue'
    }
}