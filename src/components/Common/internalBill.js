import React from 'react';
import {View, Text} from 'react-native';
import BillHeader from './BillComponents/billHeader';
import BillBody from './BillComponents/billBody';
import BillTotal from './BillComponents/billTotal'

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
