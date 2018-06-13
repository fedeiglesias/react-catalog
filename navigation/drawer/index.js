//React
import React from 'react'

//DrawerNavigator
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

//Screens
import Main from '../../screens/Main'

//contentComponent
import contentComponent from './DrawerContent'

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CatalogStack = createStackNavigator({
    Catalog: { 
        screen: Main,
    },
})


//Routes
const routes = {
    Catalog: { 
        screen: CatalogStack,
        navigationOptions: {
            drawerLabel: 'Catálogo',
            drawerIcon: ({ tintColor }) => ( <MaterialCommunityIcons name="book-open-variant" size={20} color={tintColor}/> ),
        }
    }
}

//Settings
const settings = {
    contentComponent: contentComponent,
    drawerWidth: 300,
    headerStyle: {
        display: 'none'
    },
    contentOptions: {
        activeTintColor: '#333333',
        activeBackgroundColor: 'rgba(0,0,0,0.1)',
        inactiveBackgroundColor: 'rgba(0,0,0,0)',
        inactiveTintColor: '#393939',
        style: {
            marginVertical: 0,
            marginTop: 20,
        },
        labelStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            fontFamily: 'titillium-light',
            backgroundColor: 'transparent',
        }
    }
}


export default new createDrawerNavigator(routes,settings)
