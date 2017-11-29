import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/store';
import Start from './src/start'

export default class App extends React.Component {

  render() {
    let store = new Store()
    return (
      <Provider store={store}>
        <Start />
      </Provider>

    );
  }
}
