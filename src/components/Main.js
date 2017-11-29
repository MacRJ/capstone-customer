import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './';
import {Header} from './Header';
import Working from './Common/working';
import firebase from 'firebase'

const Main = () => {
  const {main, working, button} = styles
  return (
    <View style={main}>
      <Header headerText="Your Bill"/>
      <Working />
      <Button
        onPress={() => firebase.auth().signOut()}>
        Log out
      </Button>
    </View>
  )
}
const styles = {
  main: {
    flex: 1
  }
}

export {Main}
