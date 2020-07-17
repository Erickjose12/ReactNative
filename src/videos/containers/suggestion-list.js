import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';

class SuggestionList extends Component {
  rederEmtpy = () => <Empty Text="No hay sugerencias"/>
  render() {
    const list = [
          //Aqui irian los elementos de la lista
    ]
    return (
      <Layout
        title="RECOMENDACIONES"
        >
        <FlatList
          data={list}
          ListEmptyComponent= {this.rederEmtpy}
          renderItem={({ item }) => <Text>{item.title}</Text> }
        />
      </Layout>
    )
  }
}

export default SuggestionList
