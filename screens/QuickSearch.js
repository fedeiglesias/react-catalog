//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

//React Native
import { View, Text, StyleSheet, ScrollView, BackHandler, StatusBar, TextInput, TouchableOpacity } from 'react-native'

//Navigation Actions
import { NavigationActions, Header  } from 'react-navigation'

//constants
import * as constants from '../constants/'

//Catalog Actions
import * as catalogActions from '../actions/Catalog'

//Icons
import { MaterialIcons } from '@expo/vector-icons'

class QuickSearch extends Component {
    static navigationOptions = {
        headerMode: 'none',
    }

    constructor(props) {
        super(props);
        this.state = {query: this.props.query}
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handleBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress)
    }

    _changeInput(text){
        this.setState({query: text})
    }

    _handleBackPress = () => {
        this.props.dispatch(NavigationActions.back())
        return true
    }

    _search(){
        this.props.dispatch(catalogActions.searchItems(this.state.query))
    }

    render(){
        let deleteShowStyle = {}
        if(this.state.query == '') deleteShowStyle = {display: 'none'} 

        return (
            <View style={styles.root}>
                <View style={styles.barContainer}>
                <View style={styles.bar}>
                    
                    <TouchableOpacity onPress={() => { this._handleBackPress() }} style={styles.backButton}>
                        <MaterialIcons name="arrow-back" size={24} style={styles.back}/>
                    </TouchableOpacity>

                    <TextInput  style={styles.input} 
                                placeholder="Buscar en el Catálogo" 
                                underlineColorAndroid="transparent"
                                placeholderTextColor="rgba(0,0,0,0.5)"
                                returnKeyType="search"
                                autoFocus={true}
                                selectionColor={constants.main_color}
                                value={this.state.query}
                                onSubmitEditing={this._search.bind(this)}
                                clearButtonMode="while-editing"
                                onChangeText={this._changeInput.bind(this)}/>
                
                    <TouchableOpacity onPress={() => { this._changeInput("") }} style={[styles.deleteButton, deleteShowStyle]}>
                        <MaterialIcons name="close" size={24} style={styles.delete}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.results}>
            </View>
        </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
})

const mapStateToProps = state => ({
    query: state.catalog.query,
})

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearch)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

    barContainer:{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white',
        elevation: 3,
        flexDirection: 'row',
    },

        bar: {
            height: 54,
            flexDirection: 'row',
            flexGrow: 1,
            alignItems: 'center',
        },

            backButton: {
                padding: 10,
                marginLeft: 3,
            },
                back: {
                    color: '#333',
                },

            input: {
                height: 40,
                marginLeft: 7,
                flexGrow: 1,
                fontFamily: 'titillium-regular',
                fontSize: 16,
            },

            deleteButton: {
                padding: 10,
                marginLeft: 3,
            },
                delete: {
                    color: '#333',
                },

  results: {
      flexGrow: 1,
  },


})