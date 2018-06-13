//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

//RN
import { ScrollView, Text, View, StyleSheet } from 'react-native'

//RN Image
//import {Image} from "react-native-expo-image-cache";

//RNN
import { DrawerItems } from 'react-navigation'

//Icons
import { Octicons } from '@expo/vector-icons'

import Avatar from '../../components/Avatar'
import DrawerHeader from './DrawerHeader'


class DrawerContent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <DrawerHeader/>
                <ScrollView>
                    <DrawerItems {...this.props} style={{backgroundColor: 'red'}} />
                </ScrollView>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  })


const mapDispatchToProps = dispatch => ({
})
  
const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)