import React, { Component } from 'react'
import { connect } from 'react-redux'

//RN
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons'

//Actions
import * as accountActions from  '../actions/Account'

//Header
import MainHeader from '../navigation/headers/main'

import Item from '../components/item'

class Main extends Component {
  static navigationOptions = MainHeader

  componentDidMount() {
    this.props.dispatch(accountActions.loadProfile())
  }

  render(){
    
    //Loading session...
    if(this.props.account.session == 'loading') return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00aedf" />
      </View>
    )

    return (
      <ScrollView style={styles.container}>
          {this.props.catalog.items.map(item => <Item data={item} key={item.id}></Item>)}
      </ScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
})


const mapStateToProps = state => ({
  nav : state.nav,
  account : state.account,
  catalog : state.catalog,
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  container: {
    backgroundColor: '#eee',
  },

  text: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },

  icon: {
    width: 24,
    height: 24,
  },

})