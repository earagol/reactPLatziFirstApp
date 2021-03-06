import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

export default function ControlLayout(props){
    return(
        <View style={style.container}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'rgba(255,255,255,.3)',
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        height:35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    }
})