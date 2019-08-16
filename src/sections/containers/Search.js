import React, { Component } from 'react'
import {
    TextInput,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'

import API from '../../utils/api'

class Search extends Component{
    state = {
        text:''
    }
    handleSubmit = async () => {
        const movie = await API.searchMovie(this.state.text);
        console.log(movie);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIES',
            payload:{
                movie: movie[0]
            }
        })
    }
    handleChangeText = (text) => {
        this.setState({
            text: text
        })
    }
    render(){
        return(
            <TextInput 
                placeholder='Busca tu pelicula favorita'
                underlineColorAndroid='transparent'
                autoCorrect={false}
                autoCapitalize='none'
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangeText}
                style={style.input}
            />
        )
    }
}

const style = StyleSheet.create({
    input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
  })

export default connect(null)(Search)