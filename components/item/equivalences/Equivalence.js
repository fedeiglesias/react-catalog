//React
import React, { Component } from 'react'

//RN
import { View, StyleSheet, Text } from 'react-native'

//Svg Lib
import Image from 'react-native-remote-svg'

//Icons
import { Feather, Entypo } from '@expo/vector-icons'

//Button
import AddToCartButton from '../../misc/AddToCartButton'

export default class extends React.Component {

    renderName(){
        return this.props.data.modelo + (this.props.data.version ? (' ' + this.props.data.version) : '')
    }

    renderYear(){
        if((this.props.data.desde == '--') && (this.props.data.hasta == '--')) return;
        return <Text style={styles.year}>{this.props.data.desde + '/' + this.props.data.hasta}</Text>
    }

    render() {
        let precio = this.props.data.precio.toString()
        let entero = precio.split('.')[0]
        let decimal = precio.split('.')[1].substring(0,2);

        return (
            <View style={[styles.root, (this.props.index ? {} : styles.first)]}>
    
                <View style={{flex: 1, maxWidth: 50, padding: 5, marginRight: 10, marginTop: 3}}>
                    <Image  source={{ uri: 'https://distribuidoralibertad.com/fabricantes/'+this.props.data.marca_id+'.svg'}} 
                            style={{ aspectRatio: 1, maxHeight: '100%', maxWidth: '100%'}} />
                </View>
    
                <View style={styles.brandCode}>
                    <Text style={styles.brand}>{this.props.data.marca.toUpperCase()}</Text>
                    <Text style={styles.code}>{this.props.data.codigo}</Text>
                </View>
    
                <View style={styles.price}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceInt} numberOfLines = {1}>{'$ ' + entero}</Text>
                        <Text style={styles.priceDecimal} numberOfLines = {1}>{decimal}</Text>
                    </View>
                    <Text style={styles.priceIVA} numberOfLines = {1}>{'NO INCLUYE IVA'.toUpperCase()}</Text>
                </View>
                
                <AddToCartButton style={styles.addToCartButon}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    root: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 0,
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.07)',
    },

    first: {
        borderTopWidth: 0,
        borderColor: 'transparent',
    },

    brandCode: {
        flex: 1, 
        justifyContent: 'center', 
        marginTop: 3,
    },

    brand: {
        fontFamily: 'titillium-regular', 
        fontSize: 12,
    },

    code: {
        fontFamily: 'titillium-semibold', 
        fontSize: 10, 
        marginTop: -2
    },

    price: {
        flex: 1, 
        justifyContent: 'center',
    },

    priceContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-end',
    },

    priceInt: {
        color: '#333', 
        fontSize: 20, 
        fontFamily: 'titillium-semibold',
    },

    priceDecimal: {
        color: '#333', 
        fontSize: 10, 
        fontFamily: 'titillium-semibold', 
        marginLeft: 3,
    },

    priceIVA: {
        color: '#333', 
        fontSize: 6, 
        fontFamily: 'titillium-semibold', 
        textAlign: 'right', 
        marginTop: -5, 
        paddingRight: 15,
    },

    addToCartButon: {
        height: '100%', 
        justifyContent: 'center',
    },

    cartIcon: {
        color: '#00aedf',
        marginLeft: 14,
        fontSize: 27,
        marginTop: 3,
    },

    plusIcon: {
        color: '#00aedf',
        position: 'absolute',
        top: 19,
        right: 5,
        fontSize: 12,
    }

})