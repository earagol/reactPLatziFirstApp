import  React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

function Header(props) {
    return (
        <View>
            <SafeAreaView>
                <View style={style.container}>
                    <Image 
                        source={require('../../assets/logo.png')}
                        style={style.logo}
                    />
                    <View style={style.right}>
                        { props.children }
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    logo:{
        width: 80,
        height: 26,
        resizeMode: 'contain'
    },
    container:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    right:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})
export default Header; 