import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation'

import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'


import api from '../api'

class Loading extends Component {

  static navigationOptions = () => ({
    header: null
  })


 
  componentDidMount() {
    //Event listener on Show Screen
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this.didFocus
    )

    this.callAPI()
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate ')
  }

  componentWillUnmount() {
    //Remove event listener
    this._sub.remove();
  }

  callAPI(){
    api({
      module: 'cuenta',
      action: 'info',
      data: {},
      response: (json) => {
        if(json.logued)
          this.props.dispatch(NavigationActions.navigate({ routeName: 'Main' }))
        
      }
    })
  }
 
  didFocus(){
    this.callAPI()
  }

  render() {
    console.log('render') 
 
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00aedf" />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})


const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)