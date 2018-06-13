//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

import { LinearGradient } from 'expo';

//RN
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'

//Icons
import { Octicons, MaterialIcons } from '@expo/vector-icons'

//Tabs
import { TabViewPagerPan, TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'

//import
import Vehicles from './vehicles'
import Dimensions from './dimensions'
import Equivalences from './equivalences'

//Component
export default class ItemTabs extends React.Component {

    constructor(){
        super()
        this.state = {
            index: 0,
            open: false,
            height: new Animated.Value(250),
            routes: [
                { key: 'vehiculos', title: 'Vehículos' },
                { key: 'dimensiones', title: 'Dimensiones' },
                { key: 'equivalencias', title: 'Equivalencias' },
            ],
        }
    }


    showMoreLayout = () => {
    return  <View>
                <LinearGradient
                    colors={['rgba(255,255,255, 0)', 'rgba(255,255,255, 1)']}
                    style={styles.footerGradient}>
                    <TouchableOpacity style={styles.viewMoreButton} onPress={this.showMore}>
                        <Text style={styles.seeMore}>VER MÁS</Text> 
                        <MaterialIcons name="expand-more" size={20} color="#333" />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
    }

    showLessLayout = () =>
        <TouchableOpacity style={styles.viewLessButton} onPress={this.showLess}>
            <Text style={styles.seeMore}>CONTRAER</Text>
            <MaterialIcons name="expand-less" size={20} color="#333" />
        </TouchableOpacity>

    showMore = () => {
        this.setState({open: true})
    }

    showLess = () =>{
        this.setState({open: false})
    }
   
    _handleIndexChange = index => this.setState({ index })

    _renderHeader = props => (
        <TabBar {...props} 
            tabStyle={styles.tab} 
            indicatorStyle={styles.tabIndicator} 
            labelStyle={styles.tabLabel}
            pressColor="#ffffff"
            pressOpacity={0.5}
            style={styles.tabBar}/>
    )
    
    _renderScene = SceneMap({
        vehiculos: () => <Vehicles data={this.props.vehicles} />,
        dimensiones: () => <Dimensions data={this.props.dimensions} />,
        equivalencias: () => <Equivalences data={this.props.equivalences} />,
    })

    _renderPager = props => (
        <TabViewPagerPan {...props} style={styles.TabViewPagerPan} />
    )

    render(){

        var height = this.state.open ? {height: undefined} : {height: 150}
        
        return (
            <Animated.View style={styles.root}>
                <TabViewAnimated
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    renderPager={this._renderPager}
                    onIndexChange={this._handleIndexChange}
                    style={[styles.tabViewAnimated, height]}
                />
                {this.state.open ? this.showLessLayout() : this.showMoreLayout()}
            </Animated.View>
        )
    }
}


let styles = StyleSheet.create({

    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        elevation: 3,
        marginTop: 5,
    },

    tabViewAnimated:{
        flexGrow: 1,
        flexBasis: 100,
    },

    tabsContainer: {
        backgroundColor: "transparent",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 0,
    },
    
    TabViewPagerPan: {
    },

    tabBar: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        elevation: 0,
    },

    tab: {
        backgroundColor: 'transparent',
    },

    tabLabel: {
        color: '#333',
        fontFamily: 'titillium-semibold',
        fontSize: 11,
    },

    tabIndicator:{
        height: 50,
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderColor: '#00aedf',
        position: 'relative',
    },



        footerGradient: {
            justifyContent: 'center',
            height: 70,
            bottom: 0,
            borderRadius: 4,
            position: 'absolute',
            width: '100%',
        },

        viewMoreButton: {
            position: 'relative',
            bottom: -10,
            backgroundColor: 'rgba(255,255,255,0.8)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },

        viewLessButton: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: 7,
            paddingBottom: 7,
        },

        seeMore: {
            fontFamily: 'titillium-semibold',
            fontSize: 12,
        } 

})


