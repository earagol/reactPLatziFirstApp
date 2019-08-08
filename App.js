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
import { Provider } from 'react-redux'
import store from './src/store'



export default class App extends Component {
  state =  {
    // suggestionList: [],
    // categoryList: []
  }

  async componentDidMount() {
    const categoryList = await API.getSuggestion(10)
    const suggestionList = await API.getMovies()
    // console.log(movies)
    // console.log(categorias)
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categorias
    // })
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })


  }

  render(){
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    )
  }
  
}

