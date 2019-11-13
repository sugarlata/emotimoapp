// React Modules
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// My Modules
import config from '../../config';


export default class ScreenMQTT extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={styles.mainView}>
                <Text>
                    MQTT Screen
                </Text>

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