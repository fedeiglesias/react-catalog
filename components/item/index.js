//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

//RN
import { View, StyleSheet, Text, TouchableOpacity, Animated, ScrollView } from 'react-native'

//Icons
import { Octicons } from '@expo/vector-icons'

//Tabs
import { TabViewPagerPan, TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'

//Components
import ItemMainInfo from './ItemMainInfo'
import ItemTabs from './ItemTabs'

//Constants
import * as constants from '../../constants'


//Component
class Item extends React.Component {

    constructor(){
        super()
        this.state = {
            index: 0,
            open: false,
            height: new Animated.Value(500),
            routes: [
                { key: 'vehiculos', title: 'Vehiculos' },
                { key: 'dimensiones', title: 'Dimensiones' },
                { key: 'equivalencias', title: 'Equivalencias' },
            ],
        }
    }

    render(){
        return (
            <Animated.View style={[styles.root] }>
                <ItemMainInfo data={this.props.data}/>
                <ItemTabs 
                    vehicles={this.props.data.aplicaciones}
                    dimensions={this.props.data.dimensiones}
                    equivalences={this.props.data.equivalencias}/>
            </Animated.View>
        )
    }
}


const mapStateToProps = state => ({
    profile: state.account.profile,
});
  
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);


let styles = StyleSheet.create({
    root: {
        margin: 7,
        elevation: 2,
        borderRadius: 4,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
    },
})


