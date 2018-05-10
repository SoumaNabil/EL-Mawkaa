import React from 'react';
import {Text , View , Image , ScrollView,FlatList, ListItem} from 'react-native';
import * as firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/functions'
import HeadB from './HeadB'
import {Card , CardSection} from './common';
import HandleRender from './common/HandleRender'
import bidDuration from './assets/bds.png';
import bidhamer from './assets/bdm.png';
import bideStatus from './assets/bdd.png'


export default class BidingMain extends React.Component {

    state = {
        Data:[]
    }

    componentWillMount()
    {
      firebase.initializeApp({
        apiKey: "AIzaSyBB0EId0d4mgCu49hNBDNahSpnuqknKias",
        authDomain: "el-mawkaa-e4023.firebaseapp.com",
        databaseURL: "https://el-mawkaa-e4023.firebaseio.com",
        projectId: "el-mawkaa-e4023",
        storageBucket: "el-mawkaa-e4023.appspot.com",
        messagingSenderId: "705455741656"
      });
      this.getBids();
    }


    getBids() {
           fetch('https://us-central1-el-mawkaa-e4023.cloudfunctions.net/getBids')
          .then((response) => response.json())
          .then((responseJson) => {
            //debugger;
            this.setState({
              Data : Object.entries(responseJson)
            });
          })
          .catch((error) => {
            console.error(error);  
         });  
      }


      handlerender()
      {  
          
        const Bids = []
                Object.entries(this.state.Data).forEach((entry) => {
                const [key, value] = entry;
                Object.entries(value).forEach((item) =>{
                const [key,subvalue] = item;
                if(subvalue.bidName)
                {
                Bids.push(subvalue);
                } 
                });
                })
            return Bids.map(Bid => 
                <HandleRender key = {Bid.bidName} Bid = {Bid}/>
            );
        }

    render(){
        const {main, iconss , bidTitle ,adressStyle,bidInfo , statusText , durationText , bidText} = Styles ;
        return(
                
            <View style={main}>    
            <ScrollView>        
            <Card  >
            {this.handlerender()}
                 
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
       // alignItems: 'strach',  
      

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