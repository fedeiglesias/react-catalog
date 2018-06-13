//React
import React, { Component } from 'react'

//RN
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

//Icons
import { Feather, Entypo } from '@expo/vector-icons'

export default class extends React.Component {
    addToCart = () => {
        console.log('agregar al carrito')
    }

    render = () =>
            <TouchableOpacity style={[styles.root, this.props.style]} onPress={this.addToCart}>
                <Feather name="shopping-cart" style={styles.cartIcon}/>
                <Entypo name="plus" style={styles.plusIcon}/>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginBottom: -14,
    },

    cartIcon: {
        color: '#00aedf',
        fontSize: 27,
    },

    plusIcon: {
        color: '#00aedf',
        height: 14,
        position: 'relative',
        top: -21,
        left: 2,
        fontSize: 12,
    }
})