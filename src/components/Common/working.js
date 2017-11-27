
import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Bill from './bill';
// import Items from './items'

class working extends Component {
 state = {
   billSelected: false,
 }



// Selecting Bill Function
selectingBillFunction() {
  if(!this.state.billSelected) {
    return <TouchableHighlight onPress={() => this.setState({billSelected: true})}>
      <View>
        <Bill selected={this.state.billSelected}/>
      </View>
  </TouchableHighlight>
} else {
    return <View>
      <Bill selected={this.state.billSelected} />
  </View>
}
}

// Selecting Items Function
// selectingItemsFunction() {
//   if(this.state.billSelected) {
//     return <TouchableHighlight onPress={() => this.setState({billSelected: false})}>
//     <View>
//       <Items selected={this.state.billSelected} />
//     </View>
//   </TouchableHighlight>
//
// } else {
//   return <View>
//     <Items selected={this.state.billSelected} />
//   </View>
// }
// }

  render() {
  return (
    <View>
      <Text>Hello</Text>
      {this.selectingBillFunction()}
      {this.selectingItemsFunction()}
    </View>
    );
  }
};



export default working
