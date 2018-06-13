//React
import React, { Component } from 'react'

//Redux 
import { connect } from 'react-redux'

//RN
import { View, StyleSheet, Text, TouchableOpacity, Animated, ScrollView } from 'react-native'

//Icons
import { Octicons } from '@expo/vector-icons'

//ImageLoad
import ImageLoad from 'react-native-image-placeholder'
import placeholderImage from '../../assets/placeholder_images.png'

//Button
import AddToCartButton from '../misc/AddToCartButton'

//Constants
import * as constants from '../../constants'

//Navigation Actions
import { NavigationActions } from 'react-navigation'

//Gallery actions
import * as gallery from '../../actions/Gallery'

//Component
class ItemMainInfo extends React.Component {

    componentDidUpdate(){
    }

    renderPrice(){
        let precio = this.props.data.precio.toString()
        let entero = precio.split('.')[0]
        let decimal = precio.split('.')[1].substring(0,2);
        
        return (
            <View>                 
                <View style={styles.price}>
                    <Text style={styles.priceInt} numberOfLines = {1}>{'$ ' + entero}</Text>
                    <Text style={styles.priceDecimals} numberOfLines = {1}>{decimal}</Text>
                </View>
                <Text style={styles.priceIVA} numberOfLines = {1}>{'NO INCLUYE IVA'.toUpperCase()}</Text>
            </View>
    )}

    openGallery(){
        //Restructure images object
        let imgs = []
        for(var i in this.props.data.imgs) 
            imgs.push({source: {uri: constants.GALLERY_BASE_IMAGES_URL + this.props.data.imgs[i]}})
        
        //Open gallery
        this.props.dispatch(gallery.openGallery(imgs))
    }

    renderRubro(){
        if(!this.props.data.rubros.length) return 'Sin datos';
        return this.props.data.rubros[0].nombre_singular;
    }

    renderGalleryCover(){
        if(!this.props.data.imgs.length) return { uri: 'https://distribuidoralibertad.com/nada.jpg' }

        let url = 'https://distribuidoralibertad.com/articulos/thumbs/'
        return { uri: url + this.props.data.imgs[0] }
    }

    _renderDescription(data){
        if(!data.descripcion) return ''
        return this.props.data.descripcion.toUpperCase()
    }

    state = {
        index: 0,
        open: false,
        height: new Animated.Value(200),
        routes: [
            { key: 'vehiculos', title: 'Vehiculos' },
            { key: 'dimensiones', title: 'Dimensiones' },
            { key: 'equivalencias', title: 'Equivalencias' },
        ],
    }


    render(){        
        return (
            <View style={styles.root}>
                <TouchableOpacity onPress={this.openGallery.bind(this)}>
                    <ImageLoad
                        style={styles.img}
                        borderRadius={3}
                        isShowActivity={true}
                        placeholderSource={placeholderImage}
                        placeholderStyle={{ width: '100%', height: '100%'}}
                        loadingStyle={{ size: 'small', color: '#00aedf' }}
                        source={this.renderGalleryCover()}
                        onPress={this.openGallery}
                    />
                </TouchableOpacity>

                <View style={styles.info}>
                    <Text style={styles.category} numberOfLines={1}>{this.renderRubro()}</Text>
                    <Text style={styles.description} numberOfLines={1}>{this._renderDescription(this.props.data)}</Text>
                    <Text style={styles.brand} numberOfLines={1}>{this.props.data.marca.toUpperCase()}</Text>
                    <Text style={styles.code} numberOfLines={1}>{'COD: ' + this.props.data.codigo}</Text>
                    <View style={styles.priceActionsContainer}>
                        <View style={styles.actions}>
                            <AddToCartButton />
                        </View>
                        {this.renderPrice()}
                    </View>
                </View>
        </View>)
    }
}

const mapStateToProps = state => ({
});
  
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
    openGallery: gallery.openGallery,
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemMainInfo);


const styles = StyleSheet.create({
    root:{
        flexDirection: 'row', 
        padding: 7
    },

    img: {
        backgroundColor: 'white',
        width: 110,
        height: 110,
        borderRadius: 4,
        marginRight: 10,
        overflow: 'hidden',
    },

    info: {
        flexDirection: 'column',
        flexGrow: 1,
    },

    category: {
        fontFamily: 'titillium-semibold',
        fontSize: 17,
    },

    description: {
        fontFamily: 'titillium-regular', 
        fontSize: 12,
    },

    code: {
        fontFamily: 'titillium-semibold',
        fontSize: 10,
    },

    brand: {
        fontFamily: 'titillium-regular',
        fontSize: 12,
    },

    priceActionsContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    actions: {
        flexGrow: 1,
        padding: 2,
        width: 60,
        flexDirection: 'row',
    },

    price: {
        flexDirection: 'row', 
        flexWrap: 'nowrap',
    },

    priceSymbol:{
        color: '#00aedf',
        fontSize: 24,
        fontFamily: 'titillium-semibold',
        textAlign: 'right',
        width: 15,
    },

    priceInt: {
        color: '#00aedf',
        fontSize: 24,
        fontFamily: 'titillium-semibold',
        textAlign: 'right',
        width: 60,
    },

    priceDecimals: {
        color: '#00aedf',
        fontSize: 14,
        fontFamily: 'titillium-semibold',
        textAlign: 'right',
        width: 18,
    },

    priceIVA:{
        color: '#333',
        fontSize: 8,
        fontFamily: 'titillium-semibold',
        textAlign: 'right',
        marginTop: -6,
        paddingRight: 18,
    }

})


