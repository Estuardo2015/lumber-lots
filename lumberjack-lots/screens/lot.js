import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class Lot extends React.Component {
  render() {
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
          rightComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('About')}
              name='info'
              color='white'
            />
          }
          outerContainerStyles={{ backgroundColor: '#1B660F' }}
        />

        

      </View>

    );
  }
}
