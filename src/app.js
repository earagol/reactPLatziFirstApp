import React, { Component } from 'react'
import {
    View,
} from 'react-native'

import API from './utils/api'

import { connect } from 'react-redux'

import Home from './screens/containers/Home'
import Header from './sections/components/Header'
import SuggestionList from './videos/containers/Suggestion-list'
import CategoryList from './videos/containers/Category-list'
import Movie from './screens/containers/Movie'
import Search from './sections/containers/Search'

class AppLayout extends Component{
    async componentDidMount() {
        const categoryList = await API.getSuggestion(10)
        this.props.store.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: {
            categoryList
          }
        })
    
        const suggestionList = await API.getMovies()
        this.props.store.dispatch({
          type: 'SET_SUGGESTION_LIST',
          payload: {
            suggestionList
          }
        })
        console.log('aquuiiiiii')
        console.log(categoryList)
        console.log(suggestionList)
        //Antes de redux
        // this.setState({
        //   suggestionList: movies,
        //   categoryList: categorias
        // })
    }

    render(){
        if(this.props.selectedMovie){
            return <Movie />
        }
        return(
            <Home>
                <Header />
                <Search />
                <CategoryList />
                <SuggestionList />
            </Home>
        )
    }
}

function mapStateToProps(state){
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(AppLayout)