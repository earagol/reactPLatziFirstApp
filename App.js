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


import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'

import Loading from './src/sections/components/Loading'
import AppLayout from './src/app'

export default class App extends Component {
  render(){
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={ <Loading />}
          persistor={persistor}
        >
        <AppLayout />
        </PersistGate>
      </Provider>
    )
  }
}

