//DrawerNavigator
import { createStackNavigator } from 'react-navigation'

//Screens
import Login from '../screens/Login'
import Loading from '../screens/Loading'
import GalleryScreen from '../screens/Gallery'
import QuickSearch from '../screens/QuickSearch'

//Drawer
import Drawer from './drawer'

//Routes
const routes = {
    Login: {screen: Login},
    Loading: {screen: Loading},
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
    initialRouteName: 'Loading',
    headerMode: 'none',
}

export default new createStackNavigator(routes,settings)
