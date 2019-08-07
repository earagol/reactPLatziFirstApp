import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default function Layout(props){
    return(
        <View style={style.container}>
            <View style={style.video}>
                {props.video}
            </View>
            
            <View style={style.overlay}>
            {
                props.loading &&
                props.loader
            }
            </View>
            {props.controls}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        paddingTop: '56.25%'
    },
    video:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:'black'
    },
    overlay:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        justifyContent:'center',
        alignItems:'center'
    }
})