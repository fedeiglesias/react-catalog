
//React & Redux
import React, { Component } from 'react'
import { connect } from 'react-redux'

//React Native
import { View, Text, Animated, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, ToastAndroid } from 'react-native'

// Actions
import * as loginActions from '../actions/account/Login'

//API
import api from '../api'

//Component
class Login extends Component {

  static navigationOptions = () => ({
    title: '',
    header: null
  })

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0,0.4)"
            underlineColorAndroid="transparent"
            editable={!this.props.loading}
            value={this.state.username}
            onChangeText={text => { this.setState({ username: text.trim() })}}
          />
            
          <TextInput 
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="rgba(0,0,0,0.4)"
            secureTextEntry
            editable={!this.props.loading}
            underlineColorAndroid="transparent"
            value={this.state.password}
            onChangeText={text => { this.setState({ password: text.trim() })}}
          />
          
          <TouchableOpacity 
            disabled={this.props.loading}
            style={styles.loginButton} 
            onPress={() => this.props.login(this.state.username, this.state.password) }>
            { !this.props.loading ? 
              <Text style={styles.loginButtonText}>INGRESAR</Text> : 
              <ActivityIndicator size="small" color="#fff" />
            }
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  username: state.account.screens.login.username,
  password: state.account.screens.login.password,
  loading: state.account.screens.login.loading,
})

const mapDispatchToProps = {
  ...loginActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  form: {
    marginTop: 10
  },

  input: {
    color: "#444",
    height: 40,
    marginTop: 10,
    width: 250,
    fontSize: 14,
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 10,
    borderRadius: 3
  },

  logo: {
    width: 200,
    height: 200
  },

  loginButton: {
    height: 40,
    backgroundColor: "#00aedf",
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },

  loginButtonText: {
    color: "rgba(255,255,255,0.8)",
    fontWeight: 'bold'
  }
})