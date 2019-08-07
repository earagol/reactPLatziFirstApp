import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

function VerticalSeparator(props){
    return(
        <View style={[style.separator,{ borderTopColor: (props.color) ? props.color : '#eaeaea'}]}>
            
        </View>
    )
}

const style = StyleSheet.create({
    separator:{
        borderTopWidth: 1
    }
})
export default VerticalSeparator;