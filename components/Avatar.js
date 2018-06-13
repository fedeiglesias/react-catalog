//React
import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'

//RN
import { View, StyleSheet, Image } from 'react-native'

//Icons
import { Octicons } from '@expo/vector-icons'

//Component
class Avatar extends Component {

    renderAvatar(profile){

        let hasAvatar = false
        if(typeof this.props.profile.avatar != 'undefined') hasAvatar = true

        //Self Avatar
        if(this.props.self && hasAvatar)
            return this.avatar(this.props.profile.avatar)

        //Self No Avatar
        if(this.props.self && !hasAvatar)
            return this.noAvatar()

    }

    avatar(url){
        let preview = { uri: url }
        let uri = url
        return <Image style={styles.avatarImage} {...{preview, uri}} />
    }

    noAvatar(){
        return (
            <View style={styles.avatarOverflow}>
                <Octicons name="person" size={50} style={styles.noAvatarIcon}/>
            </View>
        )
    }

    render(){
        
        return (
            <View style={styles.avatar}>{this.renderAvatar()}</View>
        )
    }
}


const mapStateToProps = state => ({
    profile: state.account.profile
});
  
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);


const styles = StyleSheet.create({
    avatar: {
        width: 66,
        height: 66,
        padding: 3
    },

    avatarOverflow: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 3,
        left: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4dc6e9',
        elevation: 1
    },


    noAvatarIcon:{
        color: 'rgba(255,255,255,0.5)',
        position: 'relative',
        bottom: -8,
        left: 6,
    },
 

    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        elevation: 1,
    }
})


