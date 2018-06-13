// Navigator.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'


// Redux Helpers
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

//Navigator 
import Navigator from './mainStack'

//Event Listener
const addListener = createReduxBoundAddListener("root");


//Nav connected to Redux
class Nav extends Component {
  render() {
    return (
      <Navigator navigation={{ 
          dispatch: this.props.dispatch, 
          state: this.props.nav, 
          addListener}} />
      )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(Nav)