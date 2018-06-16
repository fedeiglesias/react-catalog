// Navigator.js
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {View} from 'react-native'

import * as AccountActions from '../../actions/account/Account'

class Logout extends Component {
    componentDidMount(){
        console.log('logout')
        console.log(this.props)
        this.props.dispatch(AccountActions.logout())
    }

    render() {
        return (<View></View>)
    }
}

const mapStateToProps = state => ({
})
  
export default connect(mapStateToProps)(Logout)