/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Video from 'react-native-video';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';
import API from './src/utils/api'
import CategoryList from './src/videos/containers/Category-list';
import Player from './src/players/containers/Player'



export default class App extends Component {
  state =  {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const categorias = await API.getMovies()
    this.setState({
      suggestionList: movies,
      categoryList: categorias
    })
    console.log(movies)
    console.log(categorias)
  }

  render(){
    return (
      <Home>
        <Header />
        <Player />
        <CategoryList 
          list={ this.state.categoryList}
        />
        <SuggestionList 
          list={ this.state.suggestionList}
        />
        
      </Home>
    )
  }
  
}

