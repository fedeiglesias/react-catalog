//React
import React, { Component } from 'react'

//RN
import { View, StyleSheet, Text } from 'react-native'

//import
import VehicleModel from './Model'
import VehicleBrand from './Brand'

export default (props) => {
    return (
        <View style={[styles.root]}>
            {
                props.data.map( brand => 
                    <VehicleBrand name={brand.nombre} key={brand.id}>
                        {brand.modelos.map( model => <VehicleModel data={model} key={model.modelo_id}/> )}
                    </VehicleBrand>
                )
            }
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