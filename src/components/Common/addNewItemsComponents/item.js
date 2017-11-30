import React, {Component} from 'react';
import {Text, View, TouchableHighlight, ScrollView, Image} from 'react-native'
import {connect} from 'react-redux';

class Item extends Component {


// Selecting the category
  selecting() {
    const {selected, item, selecting, icon} = this.props
    const {not_selected, selectedStyle, scroll} = styles

    if(selected) {
      return <View>
                <TouchableHighlight
                    style={selectedStyle}
                    onPress={() => selecting(item.id)}
                    >
                    <Image
                      source={{uri: icon}}
                      style={{width: 125, height: 125}}
                      />
                </TouchableHighlight>
             </View>
    } else {
      return <View>
                <TouchableHighlight
                  style={not_selected}
                  onPress={() => selecting(item.id)}
                  >
                  <Image
                    source={{uri: icon}}
                    style={{width: 125, height: 125}}
                    />
                </TouchableHighlight>
            </View>
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
    marginRight: 25,
    marginBottom: 25,
    marginTop: 25,
    width: 125,
    height: 125
  },
  selectedStyle: {
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
