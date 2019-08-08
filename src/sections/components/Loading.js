import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

function Loading(){
    return(
        <View style={style.container}>
            <Image 
                source={require('../../assets/logo.png')}
                style={StyleSheet.logo}
            />
            <ActivityIndicator />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        marginBottom: 10,
        width: 200,
        height: 80,
        resizeMode: 'contain'
    }
})

export default Loading