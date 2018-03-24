import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'


export default class Lot extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Header
          leftComponent={{ icon: 'reply', color: '#fff' }}
          centerComponent={{ text: 'Lot', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#1B660F' }}
        />
      </View>

    );
  }
}