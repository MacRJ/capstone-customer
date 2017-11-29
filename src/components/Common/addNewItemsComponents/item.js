import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import {connect} from 'react-redux';
import BarItem from './barItem'

class Item extends Component {

// pulldown menu of all drinks in a category
  pulldown() {
  return this.props.pulldown.map(item => {
    return <BarItem
      key={item.id}
      item={item}
      />
  })
}

// Selecting the category
  selecting() {
    const {selected, item, selecting} = this.props
    const {not_selected, selectedStyle, scroll} = styles

    if(selected) {
      return <View>
              <TouchableHighlight
                  style={selectedStyle}
                  onPress={() => selecting(item.id)}
                  >
                    <Text>{item.description}</Text>
              </TouchableHighlight>
              <View>
                <ScrollView >
                  <View style= {scroll} >
                    {this.pulldown()}
                  </View>
                </ScrollView>
              </View>
             </View>
    } else {
      return <TouchableHighlight
              style={not_selected}
              onPress={() => selecting(item.id)}>

                <Text>{item.description} </Text>
            </TouchableHighlight>
    }
  }



  render() {
    return (
      <View>
        {this.selecting()}
      </View>

      )
  }
}

const styles = {
  not_selected: {
    backgroundColor: 'green',
    marginRight: 25,
    marginBottom: 25,
    marginTop: 25,
    width: 125,
    height: 125
  },
  selectedStyle: {
    backgroundColor: 'blue',
    marginRight: 25,
    marginBottom: 25,
    marginTop: 25,
    width: 125,
    height: 125
  },
  scroll: {
    width: 325,
    height: 200,
    backgroundColor: '#4286f4'

  }
}
function mapStateToProps(state, props) {
  return {
    pulldown: state.pulldown
  }
}



export default connect(mapStateToProps, null)(Item)
