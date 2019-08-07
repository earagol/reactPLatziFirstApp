import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

function HorizontalSeparator(props){
    return(
        <View 
            style={style.separator}
        />
    )
}

const style = StyleSheet.create({
    separator:{
        flex: 1,
        marginHorizontal: 5
    }
})
export default HorizontalSeparator;