import React, {Component} from 'react';
import {View, Text} from 'react-native';
import InternalItems from './addNewItemsComponents/internalItems'

const Items = (props) =>  {
    return (
      <View style={props.selected ? styles.not_selected : styles.selectedStyle}>
        <InternalItems />
      </View>
    )
}

const styles = {
  selectedStyle: {
    height: 500,
    width: 400,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'white',
    marginTop: 150
  },
  not_selected: {
    height: 100,
    width: 650,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 15,
    borderColor: '#ddd',
    backgroundColor: 'black',
    opacity: 0,
    marginTop: 500
  }
}

export default Items
