import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Spinner,Button2} from './common'
import {NavigationActions} from 'react-navigation'

class LoginForm extends React.Component {


  
    render() {
      return (
        <View style={{ flex: 1 , marginTop:40}}>
       
        <Card>
            <CardSection>
              <Input
                placeholder="user@gmail.com"
                label="Email"
               
                
              />
             
            </CardSection>
    
            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                
                
              />
            </CardSection>
           
            <Text >
            
            </Text>
    
            <CardSection>
            <Button2 onPress={()=>{this.props.selectedScreen('login')}} >LogIn</Button2>
            </CardSection>
            
         
            
          </Card>
           
      </View>
      );
    }
    
  

  }
  export default LoginForm ;