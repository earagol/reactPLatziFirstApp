import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

function Suggestion(props) {
    return(
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={style.container}>
                <View style={style.left}>
                    <Image 
                        style={style.cover}
                        source={{uri:props.medium_cover_image}}
                    />
                    <View style={style.genre}>
                        <Text style={style.genreText}>{props.genres[0]}</Text>
                    </View>

                </View>

                <View style={style.right}>
                    <Text style={style.title}>{props.title}</Text>
                    <Text style={style.year}>{props.year}</Text>
                    <Text style={style.rating}>{props.rating} estrella</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    genre:{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7
    },
    genreText:{
        color: 'white',
        fontSize: 11
    },
    cover:{
        height: 150,
        width: 100,
        resizeMode: 'contain'
    },
    right:{
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 18,
        color: '#44546b'
    },
    year:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating:{
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Suggestion;