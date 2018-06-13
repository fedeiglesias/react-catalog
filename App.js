//React
import React, { Component } from 'react';

//RN
import { View, StyleSheet, ActivityIndicator } from 'react-native'

//Redux
import { Provider } from 'react-redux'

//Store
import store from './store'

//Navigator
import Navigator from './navigation'

//Fonts
import { Font } from 'expo';


//Main App
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      fontsAreLoaded: false
    }
  }

  async componentDidMount() {
    //Load Font
    await Font.loadAsync({
      'titillium-xlight': require('./assets/fonts/titillium/TitilliumWeb-ExtraLight.ttf'),
      'titillium-light': require('./assets/fonts/titillium/TitilliumWeb-Light.ttf'),
      'titillium-regular': require('./assets/fonts/titillium/TitilliumWeb-Regular.ttf'),
      'titillium-semibold': require('./assets/fonts/titillium/TitilliumWeb-SemiBold.ttf'),
      'titillium-bold': require('./assets/fonts/titillium/TitilliumWeb-Bold.ttf'),
      'titillium-black': require('./assets/fonts/titillium/TitilliumWeb-Black.ttf'),
    })
 
    //Set State
    this.setState({ fontsAreLoaded: true })
  }

  render() {

    //Loading session...
    if(!this.state.fontsAreLoaded) return (
      <View style={styles.loaderContainer}></View>
    )

    //Loaded
    return (
      <Provider store={store}>
        <Navigator />
      </Provider> 
    )
  }
}


const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})