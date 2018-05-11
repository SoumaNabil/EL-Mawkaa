import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import Authentication from './firebase/SignUPGoogle'
import  firebase from 'firebase'; // 4.13.1
import  Expo  from 'expo';
import RootStack from './RootStack';
import BidingMain from './BidingMain';

export default class LoginScreen extends Component{

   static navigationOptions = {
    title: 'Login',
    alignItems: 'center'

  };
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
            .then( ()=> {
              this.props.navigation.navigate('Profile');
              });

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

    logInFB = async ()=> {
        const { type,token } = await Expo.Facebook.logInWithReadPermissionsAsync('189884088314132', {
            permissions: ['public_profile'],
          });
        if (type === 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
          firebase
          .auth()
          .signInWithCredential(credential)
      .then(  ()=> {
            console.log("heading to bidding");
           this.props.navigation.navigate('BidingMain');
      })
      
      }
    };

    render() {
      return (
        
        <View style={styles.container}>
          <TouchableOpacity onPress={this.logInFB} style={styles.buttonlogin}>
               <Text style={{color: '#26559A'}}> Connect with </Text>
               <Image
                source={require('./assets/FaceBook-logo.png')}
              />
             </TouchableOpacity>
             <TouchableOpacity onPress={this._handleGoogleLogin} style={styles.buttonsignup}>
               <Text style={{color: '#2B2B2B'}}> Connect with</Text>
               <Image
                source={require('./assets/google-big.png')}
              />
             </TouchableOpacity>
        </View>
        
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5871B5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonlogin: {
    margin: 3,
    width:342,
    height: 53.34,
    opacity: 0.9,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 50
    
  },
  buttonsignup: {
    margin: 3,
    alignSelf: 'center',
    width:342,
    height: 53.34,
    opacity: 0.9,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 40
    
  },
});
