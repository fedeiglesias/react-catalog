//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

//Navigation Actions
import { NavigationActions } from 'react-navigation'

//React Native
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

//Account actions
import * as AccountActions from '../actions/account/Account'

class Loading extends Component {

  static navigationOptions = () => ({
    header: null
  })

  componentDidMount() {
    this.props.dispatch(AccountActions.loadSession())
  }

  render() {
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