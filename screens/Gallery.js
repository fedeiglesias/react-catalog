import React, { Component } from 'react'
import { connect } from 'react-redux'

//RN
import { View, Text, StyleSheet, ScrollView, BackHandler } from 'react-native'

//Navigation Actions
import { NavigationActions } from 'react-navigation'

//Gallery Actions
import * as gallery from '../actions/Gallery'

//Gallery
import Gallery from 'react-native-image-gallery';

class GalleryScreen extends Component {
    static navigationOptions = () => ({
        title: '',
        header: null
    })

    _handleBackPress = () => {
        this.props.dispatch(gallery.closeGallery())
        return true;
    }

    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", this._handleBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this._handleBackPress)
    }
    
    render(){
        return (
            <View style={styles.root}>
                <Gallery style={{ flex: 1, backgroundColor: 'black' }}
                         images={this.props.imgs} />
          </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
})

const mapStateToProps = state => ({
    imgs: state.gallery.imgs
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#000',
  },

})