import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children , Bstate}) => {
  const { buttonStyle, textStyle } = styles;

  let bb ;

  if(Bstate){
    bb = 2;
    
  }

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle , {borderBottomWidth:bb}]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {  
    alignSelf: 'stretch',  
    borderBottomColor:'#FEE180' ,
    borderBottomWidth:0 ,  
    marginRight: 6,
    marginBottom: 5
  }
};

export { Button };
