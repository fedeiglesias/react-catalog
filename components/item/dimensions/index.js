//React
import React, { Component } from 'react'

//React Native
import { View, StyleSheet } from 'react-native'

//Own components
import Dimension from './Dimension'

//Component
export default class extends React.Component {
    render = () => (
        <View style={[styles.root]}>
            {this.props.data.map((dim, i) => 
                <Dimension data={dim} key={dim.id} index={i}/> )}
        </View>
    )
}

//Styles
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        backgroundColor: "transparent",
        flexWrap: 'wrap',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 0,
    },
})