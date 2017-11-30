import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllItems, getType, getPullDown} from '../../../../actions/allActions';
import Item from './item';
import PullDownItem from './pulldownitem'
import Carousel from 'react-native-carousel-view'

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

  getPulldownItems = () => {
    return this.props.pulldown.map(item => {
      console.log('thePullDown', item)
      return <PullDownItem  key={item.id} item={item}/>
    })
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
      const icons = ["http://i1044.photobucket.com/albums/b448/rmacwj2/020-jar-of-beer_zps3ednecd5.png", "http://i1044.photobucket.com/albums/b448/rmacwj2/018-beer-pint_zps1gckjhij.png", "http://i1044.photobucket.com/albums/b448/rmacwj2/019-martini-glass_zpsemcroy8i.png"]
        return item.selected ? <Item
            key={item.id}
            item={item}
            selecting={this.selectingAType}
            selected = {true}
            icon = {icons[i]}
            /> : <Item
                    key={item.id}
                    item={item}
                    selecting={this.selectingAType}
                    selected = {false}
                    icon = {icons[i]}
                    />

      })
  }



  render() {
    const {container, row, items, carWrapper} = styles
      return (
        <View style={container}>
          <ScrollView horizontal={true} style={{flex: .20}}>
              {this.barItems()}
          </ScrollView>
        <View style={items}>
          <ScrollView>
            {this.getPulldownItems()}
          </ScrollView>
        </View>
        </View>
      )
    }
  }

  const styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
      width: 390,
      height: 650,
      flexWrap: 'wrap'
    },
    carWrapper: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
      horizontal: true,
      flexDirection: 'row',
      flex: 1,
      width: 550,
      flexWrap: 'wrap',
      height: 175,
      width: 650
    },
    items: {
      flex: .80,
      // backgroundColor: 'red'
    }
  }
  function mapStateToProps(state, props) {
    return {
      items: state.items,
      pulldown: state.pulldown
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
