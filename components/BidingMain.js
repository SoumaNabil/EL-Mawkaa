import React from 'react';
import {Text , View , Image} from 'react-native';
import HeadB from './HeadB';
import NavB from './NavB';
import SelectedSectionB from './SelectedSectionB';
import createBidButton from './createBidButton';
//import FilterPicer from './FilterPicer';


export default class BidingMain extends React.Component {
    state = {
        selectedScreen:''
    }
    
    render(){
        const {main} = Styles ;
        return(
            <View style={main} >
                <HeadB/>
                <NavB selectedScreen = {(selectedScreen)=>{this.setState({selectedScreen})}} />
                <SelectedSectionB selectedScreen = {this.state.selectedScreen} />       

                <createBidButton onPress={() =>this.props.navigation.navigate('') }>
                add new bid
              </createBidButton>
            </View>
        )
    }
}

const Styles = {
    main:{
       
        flex:1, 
        backgroundColor:'white'

    }
}