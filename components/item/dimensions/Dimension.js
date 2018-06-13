//React
import React, { Component } from 'react'

//RN
import { View, StyleSheet, Text } from 'react-native'

//Svg Lib
import Image from 'react-native-remote-svg'

//Component
export default class extends React.Component {

    render() {
        return (
            <View style={[styles.root, (this.props.index ? {} : styles.first)]}>
                <Text style={styles.name}>{this.props.data.nombre.toUpperCase()}</Text>
                <Text style={styles.value}>{this.props.data.valor}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    root: {
        minWidth: '25%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 2,
        margin: 3,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 7,
        paddingTop: 7,
        borderColor: 'rgba(0,0,0,0.03)',
    },

    name: {
        fontFamily: 'titillium-semibold',
        fontSize: 9,
        textAlign: 'left',
        width: '100%',
    },

    value: {
        width: '100%',
        fontFamily: 'titillium-semibold',
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    }
})