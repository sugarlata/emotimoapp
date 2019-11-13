// React Modules
import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';

// My Modules
import { ScreenInterface } from '../screen-interface';
import { ScreenMQTT } from '../screen-mqtt';

export default class ScreenBase extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={styles.mainView}>
                <View style={{flex: 1}}>
                    <ScreenMQTT />
                </View>
                
                <View style={{flex: 1}}>
                    <ScreenInterface />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: config.colors.dark,
    },

})