import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
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
    color: '#935CAE',
    fontSize: 25,
    fontWeight: '600',
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonStyle: {
    //: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FEE180',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#007aff',
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
