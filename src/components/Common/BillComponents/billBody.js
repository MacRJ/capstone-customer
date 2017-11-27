import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Item} from './index'


class BillBody extends Component{



renderItems() {
  var arr = this.props.bill
  var currentTab = arr.reduce((accu, item, id) => {
    var foundIdx = deepIncludes(accu, item)
    if(foundIdx === -1) {
      accu.push({drink_id: item.drink_id, name: item.name, fulfilled: item.fulfilled, price: item.price, quantity: 1})
      } else {
        accu[foundIdx].quantity ++
      }
      return accu
    }, [])
    function deepIncludes(arr, obj) {
      for(var i = 0; i< arr.length; i++) {
        if(arr[i].drink_id === obj.drink_id) {
          return i
        }
      }
      return -1
    }

  return currentTab.map((tab, i) => {
    return <Item
    currentTab={tab}
    key={i}
    />
  })
}



  render() {
    const {body, description} = styles

    return (
    <View style = {body}>
      {this.renderItems()}
    </View>
  )
}
}

const styles = {
  body: {
    flex: 2,
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
  }
}

function mapStateToProps(state, props) {
  return {
    bill: state.bill
  }
}


export default connect(mapStateToProps, null)(BillBody)
