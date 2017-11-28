import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './';
import {Header} from './Header';
import Working from './Common/working'

const Main = () => {
  return (
    <View>
      <Header headerText="Your Bill"/>
      <Working />
      <Button onPress={() => firebase.auth().signOut()}>
        Log out
      </Button>

      <Text>Testing</Text>
    </View>
  )
}

export {Main}
