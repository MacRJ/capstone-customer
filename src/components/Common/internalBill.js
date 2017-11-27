import React from 'react';
import {View, Text} from 'react-native'
import {BillHeader, BillBody, BillTotal} from './BillComponents'

const InternalBill  = () => {
  const {container} = styles

  return (
    <View style={container}>
      <BillHeader />
      <BillBody />
      <BillTotal />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  }
}

export default InternalBill
