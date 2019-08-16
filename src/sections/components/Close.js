import React from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

function Close(props){
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={style.container}
        >
            <Text style={style.button}>X</Text>
        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    container:{
        backgroundColor: '#14b739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        fontWeight: 'bold',
        color: 'green'
    }
})

export default Close