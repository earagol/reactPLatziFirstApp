import React, { Component } from 'react'
import {
    Animated
} from 'react-native'

import MovieLayout from '../components/Movie-layout'
import Player from '../../players/containers/Player'
import header from '../../sections/components/Header'
import Header from '../../sections/components/Header'
import Close from '../../sections/components/Close'
import Details from '../../videos/components/Details'

import { connect } from 'react-redux'

class Movie extends Component{
    state={
        opacity: new Animated.Value(0)
    }
    closeVideo= () => {
        this.props.dispatch({
            type:'SET_SELECTED_MOVIES',
            payload: {
                movie: null
            }
        })
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue:1,
                duration:1000
            }
        ).start()
    }
    render(){
        return(
            <Animated.View
                style={{
                    flex: 1,
                    opacity:this.state.opacity
                }}
            >
                <MovieLayout>
                    <Header>
                        <Close
                            onPress={this.closeVideo }
                        />
                    </Header>
                    <Player />
                    <Details {...this.props.movie}/>
                </MovieLayout>
            </Animated.View>
        )
    }
}

function mapStatetoProps(state){
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStatetoProps)(Movie)