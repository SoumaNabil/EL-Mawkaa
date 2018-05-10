import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/functions';
import Tour from './components/tour';


export default class App extends React.Component {
  state = {
    userData: {
      fName:"Islam3",
      lName:"Ezz3",
      userID: "1000"
    },
    bidData: {
      bidName:"bid5",
      duration:"1 week",
      bidID: "bid2000"
    },
    success: false,
    
  };
  
    CreateUser = async () =>{
      
      fetch('https://us-central1-el-mawkaa-e4023.cloudfunctions.net/funAdd', {

        method: "POST",
        body: JSON.stringify({
          firstName:this.state.userData.fName, 
          lastName:this.state.userData.lName, 
          userID:this.state.userData.userID}),
        //body: JSON.stringify({firstName:"Islam", lastName:"Ezz", userID:"test"}),
        headers: {
          "Content-Type": "application/json"
        }
      })
    }
    CreateBid = async () =>{
      fetch('https://us-central1-el-mawkaa-e4023.cloudfunctions.net/addBid', {

        method: "POST",
        body: JSON.stringify({
          bidName:this.state.bidData.bidName, 
          duration:this.state.bidData.duration, 
          bidID:this.state.bidData.bidID}),
        headers: {
          "Content-Type": "application/json"
        }
      })
    }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBB0EId0d4mgCu49hNBDNahSpnuqknKias",
      authDomain: "el-mawkaa-e4023.firebaseapp.com",
      databaseURL: "https://el-mawkaa-e4023.firebaseio.com",
      projectId: "el-mawkaa-e4023",
      storageBucket: "el-mawkaa-e4023.appspot.com",
      messagingSenderId: "705455741656"
    });
   // debugger;
  //  this.CreateUser();
    this.CreateBid();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Done
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});