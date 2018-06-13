//DrawerNavigator
import { createStackNavigator } from 'react-navigation'

//Screens
import Login from '../screens/Login'
import Main from '../screens/Main'
import GalleryScreen from '../screens/Gallery'
import QuickSearch from '../screens/QuickSearch'

//Drawer
import Drawer from './drawer'

//Routes
const routes = {
    Login: {screen: Login},
    Drawer: { 
        screen: Drawer,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
        })
    },
    Gallery: { screen: GalleryScreen },
    QuickSearch: { screen: QuickSearch }
}

//Settings
const settings = {
    initialRouteName: 'Drawer',
    headerMode: 'none',
}

export default new createStackNavigator(routes,settings)
