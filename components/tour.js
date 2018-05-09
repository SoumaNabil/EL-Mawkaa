import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Authentication from './firebase/Authentication';
export default class Tour extends Component{

  
  render() {
    const images = [
      'https://placeimg.com/640/480/arch?t=1525518168332',
      'https://placeimg.com/640/480/tech?t=1525518318311',
      'https://placeimg.com/640/480/arch?t=1525518228935',
      'https://placeimg.com/640/480/arch?t=1525518286081'

    ];
    _login = () => {
    console.log("Pressed");
    }

    return (
      <View style={styles.container}>
        <ImageSlider
          loop
          autoPlayWithInterval={3000}
          images={images}
          style = {styles.slider}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width, slider }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}

        />
         <View style={styles.content2}>
             <TouchableOpacity onPress={_login} style={styles.buttonlogin} >
               <Text> Login</Text>
               
             </TouchableOpacity>
             <TouchableOpacity onPress={_login} style={styles.buttonsignup}>
               <Text> Signup</Text>
             </TouchableOpacity>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
//   slider: { backgroundColor: '#000', height: 400 },
  content2: {
    height: 200,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
//   buttons: {
//     zIndex: 1,
//     height: 15,
//     marginTop: -25,
//     marginBottom: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
  buttonlogin: {
    margin: 3,
    alignSelf: 'center',
    width:342,
    height: 53.34,
    opacity: 0.9,
    alignItems: 'center',
    backgroundColor: '#935CAE',
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
    backgroundColor: '#5871B5',
    justifyContent: 'center',
    borderRadius: 40
    
  },
//   buttonSelected: {
//     opacity: 1,
//     color: 'red',
//   },
  customSlide: {
       flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: '100%',
    height: '100%',
  },
});
