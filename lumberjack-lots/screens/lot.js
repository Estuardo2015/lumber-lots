import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

import api from '../utilities/api';

export default class Lot extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lot: {}
    };
  }

  componentWillMount(){
    api.getLot().then((res) => {
      this.setState({
        lot: res.lot
      })
    })
  }

  render() {
    console.log("Lot: ", this.state.lot);
    return (

      <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Header
          leftComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('LotList')}
              name='reply'
              color='white'
            />
          }
          centerComponent={{ text: 'Lot', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#1B660F' }}
        />
      </View>

    );
  }
}
