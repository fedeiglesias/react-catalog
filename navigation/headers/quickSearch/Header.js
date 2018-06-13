//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

//RN
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//Icons
import { Feather, MaterialIcons } from '@expo/vector-icons'

//Actions
import { NavigationActions, DrawerActions } from 'react-navigation'

class Header extends Component {

  render(){

    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={() => { this.props.dispatch(DrawerActions.toggleDrawer()) }} style={styles.menuIconContainer}>
          <MaterialIcons name="menu" size={24} style={styles.menuIcon}/>
        </TouchableOpacity>

        <Text style={styles.title}>Libertad</Text>

        <TouchableOpacity onPress={() => { this.props.dispatch( NavigationActions.navigate({ routeName: 'QuickSearch' })) }} style={styles.searchIconContainer}>
          <MaterialIcons name="search" style={styles.searchIcon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shoppingCartIconContainer} >
          <Feather name="shopping-cart" size={24} style={styles.shoppingCartIcon}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
})

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

    menuIconContainer: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },

    menuIcon: {
      color: 'white',
      fontSize: 26,
    },

    title: {
      flexGrow: 1,
      color: 'white',
      fontFamily: 'titillium-semibold',
      fontSize: 20,
      textAlign: 'center'
    },

    searchIconContainer: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },

    searchIcon: {
      color: 'white',
      fontSize: 26,
    },

    shoppingCartIcon: {
      color: 'white'
    },

    shoppingCartIconContainer: {
      display: 'none'
    },
})