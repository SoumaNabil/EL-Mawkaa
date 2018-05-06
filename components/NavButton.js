import React from 'react';
import { Text, TouchableOpacity , View} from 'react-native';

class  NavButton extends React.Component {
  
    

    render(){
         const {textStyle, buttonStyle} = styles ;
            let bb , bc ;
                if (this.props.SButton){
                    bb=2 ;
                    bc = '#5871B5';
                }else{
                    bc = "#484848";
                }
            return(
                <TouchableOpacity onPress={this.props.onPress} style={[buttonStyle , {borderBottomWidth:bb}]} >
                   <Text style ={[textStyle , {color:bc}]} > 
                        {this.props.name}
                   </Text>
                </TouchableOpacity>
            )
  }
    
    
 
}
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {  
    alignSelf:'stretch',
    borderBottomColor:"#5871B5",
    borderBottomWidth:0,  
    
    
  }
};

export  default NavButton ;
