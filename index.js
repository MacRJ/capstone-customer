import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '.src/store'
import App from './App'

const store = configureStore()

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
