import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import {connect} from 'react-redux';

class Item extends Component {


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




export default Item
