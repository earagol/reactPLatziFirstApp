import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { tsPropertySignature } from '@babel/types';

function Empty(props) {
    return(
        <View style={style.container}>
            <Text style={style.text}>{ props.text }</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding: 10
    },
    text:{
        fontSize: 16
    }
})

export default Empty;