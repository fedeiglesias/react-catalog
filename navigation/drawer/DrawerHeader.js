//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

//RN
import { Text, View, StyleSheet } from 'react-native'

//RNN
import { DrawerItems } from 'react-navigation'

//Own components
import Avatar from '../../components/Avatar'

class DrawerHeader extends Component {


    getGreeting(profile){
        let name = '';
        if(typeof profile.nombre != 'undefined')
            name = profile.nombre.split(" ")[0]
        
        let result = "¡Hola"
        if(name != '') result += ' ' + name
        result += '!'

        return result
    }

    render(){
        return(
            <View style={styles.head}>
                <Avatar self/>
                <View style={styles.headGreetings}>
                    <Text style={styles.greeting} numberOfLines={1}>{this.getGreeting(this.props.profile)}</Text>
                    <Text style={styles.email}>{this.props.profile.email}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    head: {
        backgroundColor: '#00aedf',
        height: 123,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24,                  // StatusBar Height
        paddingBottom: 0,
        paddingLeft: 12,
        paddingRight: 15,
    },

    headGreetings: {
        flexGrow: 1,
        marginLeft: 12,
    },

    greeting: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'titillium-regular',
    },

    email: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'titillium-regular',
    }
  })


const mapDispatchToProps = dispatch => ({
})
  
const mapStateToProps = state => ({
    profile: state.account.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerHeader)