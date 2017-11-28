import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllItems, getType, getPullDown} from '../../../../actions/allActions';
import Item from './item'

class InternalItems extends Component {


componentDidMount() {
  this.props.getAll()
  this.props.getPullDown(1)
}

// selecting a type
selectingAType = (id) => {
  this.props.selectItem(id)
  this.props.getPullDown(id)
}

// rendering the bar items types
barItems() {
  const {items} = this.props

//Filtering out multiple examples of cateogories
  var filtering = func(items)
  function func(arr) {
    return arr.filter(item => {
      return item.id === item.drink_type
    })
  }
  // Mapping funciton for Item
  return filtering.map((item, i) => {
      return item.selected ? <Item
          key={item.id}
          item={item}
          selecting={this.selectingAType}
          selected = {true}
          /> : <Item
                  key={item.id}
                  item={item}
                  selecting={this.selectingAType}
                  selected = {false}
                  />

    })
}



render() {
  const {container, row} = styles
    return (
      <View style={container}>
        <View style = {row}>
          {this.barItems()}
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 550,
    height: 650,
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row',
    // flex: .25,
    width: 550,
    flexWrap: 'wrap',
    height: 175,
    width: 650,
  }
}
function mapStateToProps(state, props) {
  return {
    items: state.items
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAllItems, dispatch),
    selectItem: bindActionCreators(getType, dispatch),
    getPullDown: bindActionCreators(getPullDown, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InternalItems)
