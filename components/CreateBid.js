import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Header, Button } from 'react-native-elements'



export default class CreateBid extends React.Component {

    render() {
        return (
            <ScrollView style={styles.viewStyle}>
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    style={{ color: '#935CAE' }}
                /> */}
                <View style={{ marginTop: 24, marginLeft: 16, }}>
                    <FormLabel>
                        <Text style={styles.headerText}>Create Bid</Text>
                    </FormLabel>
                    <FormLabel>Bid Name</FormLabel>
                    <FormInput />
                    <FormLabel>Duration</FormLabel>
                    <FormInput />
                    <FormLabel>location</FormLabel>
                    <FormInput />
                    <FormLabel>Cost</FormLabel>
                    <FormInput />
                </View>

                <View style={{ marginTop: 24, marginLeft: 16, }}>
                    <FormLabel>
                        <Text style={styles.headerText}>Skills Required</Text>
                    </FormLabel>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Button
                            title='Skill' style={styles.buttonStyle} />
                        <Button
                            title='Skill' style={styles.buttonStyle} />
                        <Button
                            title='Skill' style={styles.buttonStyle} />
                        <Button
                            title='Skill' style={styles.buttonStyle} />
                    </View>
                </View>

                <View style={{ marginTop: 24, marginLeft: 16, }}>
                    <FormLabel>
                        <Text style={styles.headerText}>Project Description</Text>
                    </FormLabel>
                    <FormLabel>Describe your Project</FormLabel>
                    <FormInput />
                </View>

                <View style={{ marginTop: 24, marginLeft: 16, }}>
                    <FormLabel>
                        <Text style={styles.headerText}>Project Details</Text>
                    </FormLabel>

                    <Button
                        title='Add Photo' style={styles.buttonStyle} />
                </View>
                <View style={{ marginTop: 24, marginLeft: 16, }}>
                    <Button
                        title='Submit' style={styles.buttonStyle} />
                </View>
                <View style={{ marginTop: 24, marginLeft: 16, }}>
                    
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#935CAE',


    },
    headerText: {
        fontSize: 26,
        color: '#FCFE80'
    },
    buttonStyle: {
        height: 33,
        width: 30,
        backgroundColor: '#935CAE',

    }

});