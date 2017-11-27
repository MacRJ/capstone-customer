import React from 'react';
import {View, Text} from 'react-native'

const BarItem = (props) => {
  const {container} = styles
  return (
  <View style={container}>
    <Text style={{justifyContent: 'flex-start'}}>{props.item.name}</Text>
    <Text style={{justifyContent: 'flex-end'}}>{props.item.price}</Text>
  </View>
  )
}

styles = {
  container: {
    flex: .25,
    justifyContent: 'space-between'
  }
}

export default BarItem
