
//React & Redux
import React, { Component } from 'react'
import { connect } from 'react-redux'

//React Native
import { View, Text, Animated, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native'

// Actions
import * as loginActions from '../actions/Login'

import api from '../api'

//Component
class Login extends Component {

  static navigationOptions = () => ({
    title: '',
    header: null
  })

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
            onChangeText={text => this.props.setUsername(text)}
          />
            
          <TextInput 
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="rgba(0,0,0,0.4)"
            secureTextEntry
            editable={!this.props.loading}
            underlineColorAndroid="transparent"
            onChangeText={text => {this.props.setPassword(text)}}
          />

          <TouchableOpacity 
            disabled={this.props.loading}
            style={styles.loginButton} 
            onPress={() => this.props.login()}>
            {
              !this.props.loading ? 
              <Text style={styles.loginButtonText}>INGRESAR</Text> : 
              <ActivityIndicator size="small" color="#fff" />
            }
          </TouchableOpacity>
        
        </View>
      </KeyboardAvoidingView>
    )
  }
}



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


const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  loading: state.login.loading
});

const mapDispatchToProps = {
  ...loginActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);