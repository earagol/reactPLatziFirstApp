import React, { Component } from 'react'
import{
    View,
    FlatList
} from 'react-native'

import Empty from '../components/Empty'
import Separator from '../../sections/components/Horizontal-separator'
import Category from '../components/Category'
import Layout from '../components/Category-list-layouts'
import { connect } from 'react-redux'

function mapStateToProps(state){
    return {
        list: state.categoryList
    }
}
class CategoryList extends Component {

    renderEmpty = () => <Empty text='No hay sugerencias' />
    itemSeparator = () => <Separator />
    renderItem = ({item}) => {
        return(
            <Category {...item} />
        )
    }
    keyExtractor = item => item.id.toString()

    render(){
        return(
            <View>
                <Layout
                    title='Categorias'
                >
                    <FlatList 
                        horizontal
                        keyExtractor={this.keyExtractor}
                        data={this.props.list}
                        ListEmptyComponent={ this.renderEmpty }
                        ItemSeparatorComponent={ this.itemSeparator }
                        renderItem= { this.renderItem }
                    />
                </Layout>
            </View>
        )
    }
}

export default connect(mapStateToProps)(CategoryList);