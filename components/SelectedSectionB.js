import React from 'react';
import {Text , View , Image , ScrollView} from 'react-native';
import HeadB from './HeadB'
import {Card , CardSection} from './common';
import bidDuration from './assets/bds.png';
import bidhamer from './assets/bdm.png';
import bideStatus from './assets/bdd.png'


export default class BidingMain extends React.Component {
    render(){
        const {main, iconss , bidTitle ,adressStyle,bidInfo , statusText , durationText , bidText} = Styles ;
        return(
            <View style={main} >
                <ScrollView>
               <Card  >
                   <Text style={bidTitle} > 
                    biding title goes here
                   </Text>

                    <Text style={bidInfo} > 
                        ksjdalksdjieyrubvxcmnvcldwqknZncsldljvnxc  fasdk asdnl sldjlkajsdlk asdnlas
                        asdaskdlajsdnm
                   </Text>
                    
                    <Text style={adressStyle} > 
                        adres goes here
                    </Text>
                   

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
               </Card>





       


               </ScrollView>
               
            </View>
        )
    }
}

const Styles = {
    main:{
       
        flex:10, 
        backgroundColor:'white',
        borderTopWidth:1,
        marginTop: 10,  
      

    },
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