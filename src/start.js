import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Button, Spinner, LoginForm, Header, Main} from './components';

class Start extends Component {
  state = {loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyDq69VeBGr25_WYzDuWSe5QRzTed5DuTMU",
    authDomain: "capstone-4783a.firebaseapp.com",
    databaseURL: "https://capstone-4783a.firebaseio.com",
    projectId: "capstone-4783a",
    storageBucket: "capstone-4783a.appspot.com",
    messagingSenderId: "472009154220"
  });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Main />
        );
    case false:
      return <LoginForm />
    default:
      return <Spinner size="large"></Spinner>
  }
}

  render() {
    return (
        <View>
          {this.renderContent()}
        </View>
    );
  };
};

export default Start;
