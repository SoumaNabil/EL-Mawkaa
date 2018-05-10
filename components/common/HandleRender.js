import React,{Component} from 'react';
import {Text,View, Image} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import bidDuration from '../assets/bds.png';
import bidhamer from '../assets/bdm.png';
import bideStatus from '../assets/bdd.png'


const HandleRender = (props) =>{
    const {iconss , bidTitle ,adressStyle,bidInfo , statusText , durationText , bidText} = Styles ; 
    return(
        
        
        <View>

               <Text style = {bidTitle}>{props.Bid.bidName}</Text>

               <Text style = {bidInfo}>{props.Bid.bidDesc}</Text>

               <Text style = {adressStyle}>{props.Bid.bidAddress}</Text>

               <View style={iconss} >
                 
                 <View style={{flexDirection:'row'}} >
                     <Image source={bideStatus} style={{height:25,width:25}} />
                     <Text style ={statusText} >BidStatus</Text>                    
                 </View>

                 <View style={{flexDirection:'row'}}>
                     <Image source={bidhamer} style={{height:25,width:25}} />
                     <Text style={durationText} >asdas</Text>
                 </View>

                 <View style={{flexDirection:'row'}} >
                      <Image source={bidDuration} style={{height:25,width:25}} />
                      <Text style={bidText}>asdas</Text>
                 </View>

             </View>


        </View>
        
    );
};
const Styles ={

    bidTitle:{
        color:'#935CAE',
        fontSize: 16,
        marginTop:5,
        marginBottom: 5,
        fontWeight: '800',
    },
    bidInfo:{
        fontSize:14,
        marginBottom:10
        
    },
    adressStyle:{
        fontSize:14,
        borderBottomWidth: 13,
        borderBottomColor: 'red',
        textDecorationLine:'underline'
    },
    iconss:{
        flex:1,
        flexDirection:'row' ,
        justifyContent:'space-around',
        alignSelf:'stretch',

    },
    statusText:{
        color:'#5871B5',
        fontSize:14
    },
    durationText:{
        color:'#B334C4',
        fontSize:14
    },
    bidText:{
        color:'##935CAE',
        fontSize:14
    }
}
export default HandleRender;