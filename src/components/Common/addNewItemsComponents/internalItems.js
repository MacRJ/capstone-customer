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
    const {container, row, items, carWrapper} = styles
      return (
        <View style={container}>
          <View syle={carWrapper}>
            <Carousel
              width={520}
              height={175}
              delay={2000}
              indicatorAtBottom={false}
              indicatorSize={20}
              indicatorText="*"
              indicatorCorlor="red"
              loop= {false}
              animate={true}
              hideIndicators={false}
              >
              {this.barItems()}
            </Carousel>
        </View>
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
      flexDirection: 'column',
      width: 640,
      height: 650,
      flexWrap: 'wrap',
      backgroundColor: 'red'
    },
    carWrapper: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      width: 550,
      flexWrap: 'wrap',
      height: 175,
      width: 650,
      overflow: 'hidden'
    },
    items: {
      flex: 1,
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
