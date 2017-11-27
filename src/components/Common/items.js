import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {InternalItems} from './addNewItemsComponents'

const Items = (props) =>  {
    return (
      <View style={props.selected ? styles.not_selected : styles.selectedStyle}>
        <InternalItems />
      </View>
    )
}

const styles = {
  selectedStyle: {
    height: 550,
    width: 650,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  not_selected: {
    height: 100,
    width: 650,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'white',
    opacity: .1,
  }
}

export default Items
