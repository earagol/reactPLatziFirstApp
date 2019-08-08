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
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import Loading from './src/sections/components/Loading'



export default class App extends Component {
  state =  {
    // suggestionList: [],
    // categoryList: []
  }

  async componentDidMount() {
    const categoryList = await API.getSuggestion(10)
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList = await API.getMovies()
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    // console.log(movies)
    // console.log(categorias)
    //Antes de redux
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categorias
    // })
  }

  render(){
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={ <Loading />}
          persistor={persistor}
        >
          <Home>
            <Header />
            <Player />
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    )
  }
  
}

