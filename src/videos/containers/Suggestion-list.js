import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/Suggestion-list-layout'; 
import Empty from '../components/Empty';
import Separator from '../components/Vertical-separator';
import Suggestion from '../components/Suggestion';

export default class SuggestionList extends Component {

    renderEmpty = () => <Empty text='No hay sugerencias' />
    itemSeparator = () => <Separator />
    renderItem = ({item}) => {
        return(
            <Suggestion {...item} />
        )
    }
    keyExtractor = item => item.id.toString()

    render() {
        return (
            <Layout 
                title='Recomendado para ti'
                >
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={ this.renderEmpty }
                    ItemSeparatorComponent={ this.itemSeparator }
                    renderItem= { this.renderItem }
                />
            </Layout>
        )
    }
}