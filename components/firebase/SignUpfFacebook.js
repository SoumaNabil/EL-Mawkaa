import React from 'react';
import { Text, Alert, TouchableOpacity } from 'react-native';
import  firebase from 'firebase'; // 4.13.1
import  Expo  from 'expo';


const SignUpfFacebook = () => {
    logInFB = async ()=> {
        const { type,accessToken } = await Expo.Facebook.logInWithReadPermissionsAsync('189884088314132', {
            permissions: ['public_profile'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);
          const credential = firebase.auth.FacebookAuthProvider.credential(response.access_token);
          firebase
          .auth()
          .signInWithCredential(credential)
    .then(  ()=> {
    Alert.alert(
      'Logged in!',
     // `Hi ${(response.json()).name}!`,
    );})
    
}
      };
    return(
      <TouchableOpacity style={styles.buttonStyle} onPress={this.logInFB}>
    <Text style={styles.textStyle}>
     Log  in with facebook
    </Text>
    </TouchableOpacity>
    );
  };
  const styles={
    textStyle:{
       alignSelf:'center',
       color:'#FFC300',
       fontSize:16,
       fontWeight:'600',
       paddingTop:10,
       paddingBottom:10
    },
    buttonStyle:{
      flex:1,
      alignSelf:'stretch',
      backgroundColor:'#581845',
      borderRadius:5,
      borderWidth:1,
      borderColor:'#581845',
      marginLeft:5,
      marginRight:5
      
    }
  };
 export  default SignUpfFacebook  ;