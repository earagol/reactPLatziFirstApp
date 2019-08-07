import React, {Component} from 'react'
import {
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'

import Video from 'react-native-video'
import Layout from '../component/Layout'
import ControlLayout from '../component/Control-layout'
import PLayPause from '../component/PLay-pausa'

export default class Player extends Component{
    state = {
        loading:true
    }
    //Buffer funciona para ios pero no para android
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading:isBuffering,
            paused:false
        })
    }

    //onload funciona para android
    onLoad = () => {
        this.setState({
            loading:false
        })
    }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    render(){
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        style={style.video}
                        source={{
                            uri:'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
                        }}
                        resizeMode='contain'
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.paused}
                    />
                }
                loader={
                    <ActivityIndicator color='green' />
                }
                controls={
                    <ControlLayout>
                        <PLayPause 
                            onPress={this.playPause}
                            paused={this.state.paused}
                        />
                        <Text>progress bar</Text>
                        <Text>time left</Text>
                        <Text>fullscreen</Text>
                    </ControlLayout>
                }
            />
        )
    }
}

const style = StyleSheet.create({
    video:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
    }
})