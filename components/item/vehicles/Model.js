//React
import React, { Component } from 'react'

//RN
import { View, StyleSheet, Text } from 'react-native'


export default class extends React.Component {

    renderName(){
        return this.props.data.modelo + (this.props.data.version ? (' ' + this.props.data.version) : '')
    }

    renderYear(){
        if((this.props.data.desde == '--') && (this.props.data.hasta == '--')) return;
        return <Text style={styles.year}>{this.props.data.desde + '/' + this.props.data.hasta}</Text>
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.brand}>{this.renderName()}</Text>
                {this.renderYear()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)', 
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 6,
        paddingRight: 3,
        flex: 0,
        margin: 3,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.07)',
    },

    brand: {
        fontFamily: 'titillium-regular',
        fontSize: 13,
        color: '#333',
        marginRight: 3,
    },

    year: {
        fontFamily: 'titillium-regular',
        fontSize: 12,
        color: '#333',
        backgroundColor: 'rgba(0,0,0,0.08)',
        borderRadius: 2,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 3,
        paddingRight: 3,
        marginLeft: 2,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.08)',
    }
})