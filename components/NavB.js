import React from 'react';
import {Text , View , Image} from 'react-native';
import HeadB from './HeadB'
import NavButton from './NavButton';
import bidDuration from './assets/bds.png';
import bidhamer from './assets/bdm.png';
import bideStatus from './assets/bdd.png'

export default class NavB extends React.Component {
    state={
        SB:false,
        MB:true,
        selectedScreen:''
    }
    render(){
        const {main} = Styles ;
        return(
            <View style={main} >
               <NavButton onPress={
                                ()=>{this.setState({SB:!this.state.SB , MB:!this.state.MB , selectedScreen:'Bidding'});
                                this.props.selectedScreen(this.state.selectedScreen);
                                }
                       } 
               SButton={this.state.SB} name='Bidding' />
               <NavButton onPress={
                   ()=>{this.setState({SB:!this.state.SB , MB:!this.state.MB , selectedScreen:'EthadMolak'})
                   this.props.selectedScreen(this.state.selectedScreen);
                    }
                }  
               SButton={this.state.MB} name="et7ad molak" />
            </View>
        )
    }
}

const Styles = {
    main:{
       
        flex:1, 
        
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-around',
        

    }
}