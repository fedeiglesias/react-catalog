//React
import React, { Component } from 'react'

//RN
import { View, StyleSheet, Text } from 'react-native'

export default class extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.brand}>{this.props.name.toUpperCase()}</Text>
                <View style={styles.models}>{this.props.children}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 7,
    },

    brand: {
        fontFamily: 'titillium-semibold', 
        fontSize: 14, 
        color: '#333',
    },

    models: {
        marginLeft: 2, 
        marginRight: 2, 
        flex: 0, 
        flexDirection: 'row', 
        overflow: 'hidden', 
        flexWrap: 'wrap'
    },
})