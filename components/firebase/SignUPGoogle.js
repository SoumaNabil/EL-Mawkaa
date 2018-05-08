import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import  firebase from 'firebase'; // 4.13.1
import  Expo  from 'expo';



const SignUPGoogle = () => {

    _handleGoogleLogin = async () => {
  
        try {
          const { type,accessToken,user  } = await Expo.Google.logInAsync({
           // androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
           //iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
           androidClientId:'396887665781-1c250rft792fr4ikki9rn55s2sgggof9.apps.googleusercontent.com',
          iosClientId:'396887665781-8q3e0m42vd4mpvu1snmt2k7pr52jrjp7.apps.googleusercontent.com',
        
          
            scopes: ['profile', 'email']
          });
    
          switch (type) {
            case 'success': {
               const credential = firebase.auth.GoogleAuthProvider.credential(null, accessToken);
                    firebase
                    .auth()
                    .signInWithCredential(credential)
         .then(  ()=> {
           Alert.alert(
             'Logged in!',
             `Hi ${user.name}!`,
            );})
              break;
            }
            case 'cancel': {
              Alert.alert(
                'Cancelled!',
                'Login was cancelled!',
              );
              break;
            }
            default: {
              Alert.alert(
                'Oops!',
                'Login failed!',
              );
            }
          }
        } catch (e) {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
        
      };
      return(
        <TouchableOpacity style={styles.buttonStyle} onPress={this._handleGoogleLogin}>
      <Text style={styles.textStyle}>
       Log  in with google
      </Text>
      </TouchableOpacity>
      );
  
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
}
export  default SignUPGoogle  ;
