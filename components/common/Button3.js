import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button3 = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
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
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#5871B5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginTop:10,
   
   marginRight:8,
    marginBottom: 20,
  }
};

export  {Button3};
