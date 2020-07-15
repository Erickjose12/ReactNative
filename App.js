import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/home.js';
import Header from './src/sections/components/header.js';
import SuggestionList from './src/videos/containers/suggestion-list.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList />
      </Home>
    );
  }
}
