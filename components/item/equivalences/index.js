//React
import React, { Component } from 'react'

//React Native
import { View, StyleSheet } from 'react-native'

//Own components
import Equivalence from './Equivalence'

export default class extends React.Component {
    render = () => (
        <View style={[styles.root]}>
            {this.props.data.map((eq, i) => 
                <Equivalence    data={eq} 
                                key={eq.id} 
                                index={i}/> )}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "transparent",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 0,
    },
})